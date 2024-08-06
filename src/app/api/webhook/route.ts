import { stripe } from "@/app/shared/utils/helperFunc";
import Membership from "@/models/membership.model";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

const webhookHandler = async (req: NextRequest) => {
  try {
    const buf = await req.text();
    const sig = req.headers.get("stripe-signature")!;

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
      console.log("Event constructed successfully");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";

      if (err! instanceof Error) console.log(err);
      console.log(`❌ Error message: ${errorMessage}`);

      return NextResponse.json(
        {
          error: {
            message: `Webhook Error: ${errorMessage}`,
          },
        },
        { status: 400 }
      );
    }

    switch (event.type) {
      case "customer.subscription.created":
        const subscription = event.data.object as Stripe.Subscription;
        const itemId: any = subscription.items.data[0]?.price.product;
        const product = await stripe.products.retrieve(itemId);
        const planName = product.name;

        const membership = await Membership.findOne({
          stripeCustomerId: subscription.customer,
        });

        if (membership) {
          await Membership.updateOne(
            {
              stripeCustomerId: subscription.customer,
            },
            { $set: { plan: planName } }
          );
        } else {
          console.log("No membership exists");
        }
        break;
      case "checkout.session.completed":
        console.log("checkout completed");
        break;

      default:
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
        break;
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.log("unexpected error:", err);
    return NextResponse.json(
      {
        error: {
          message: `Method Not Allowed`,
        },
      },
      { status: 405 }
    ).headers.set("Allow", "POST");
  }
};

export { webhookHandler as POST };
