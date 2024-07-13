import { connectDb } from "@/app/shared/libs/db";
import { validateEmail } from "@/app/shared/utils/Zerobounce.Api";
import Subscriber from "@/models/subscriber.model";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
/*
This is a route handler , a function which would get executed when this route would be hit from another client.  
this is a server action and not a tsx file which would return a webpage,
when client tries to reach this endpoint, it sends data in the form of request.

here this route handler is suppose to create a subscriber from another origin(another client)
Any who wants to start their newsletter and has a webapp for their product, can make their users subscribe to theri newsletter by requesting
to this end point.
now this endpoint on hitting must posess two things in order to make the user subscribe:
1) apiKey - its a jwt created using function below 
const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY!);

this token contains a header ,  payload , signature
payload contains the information of the newsletterOwner, usage of this token ensures following things:
1)to establish cross origin resource sharing or communication he other client who is making a request for subscription must send claim in the form this token 
which contains newsletter owner info ensuring that this request is meant to create a subscription for the newsletter owner only mentioned in the payload  

2) emailId of the user who wants to subscribe to this newsletter -- from data

searches first if the subscriber with this email and newsletterOwner exist
if exist return NextResponse("email already exist")

if doesnt exist then first the email recieved needs to be validated
if invalid , return NextResponse({"Email not valid"})







*/
export async function POST(req: NextRequest) {
  try {
    console.log("entered tryblock");
    const data = await req.json();
    console.log("data from request", data, "\n");
    const apiKey = data.apiKey;

    const decoded: any = jwt.verify(apiKey, process.env.JWT_SECRET_KEY!);
    console.log("decode data from jwt", decoded, "\n");
    await connectDb();
    //check if subscriber already exist
    const isSubscriberExist = await Subscriber.findOne({
      email: data.email, // this is the email that customer would input on the newsletterOwner website
      newsLetterOwnerId: decoded?.user?.id,
    });

    if (isSubscriberExist) {
      return NextResponse.json({ error: "Email already exists!" });
    }
    //other case subscriber doesnot exist therefore 1) the email needs to be validated 2) create subscriber record in db
    const validationResponse = await validateEmail({ email: data.email });
    if (validationResponse.status === "invalid") {
      return NextResponse.json({ error: "Email not valid!" });
    }

    const subscriber = await Subscriber.create({
      email: data.email,
      newsLetterOwnerId: decoded?.user?.id,
      source: "BY API",
      status: "Subscribed",
    });

    return NextResponse.json(subscriber);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
