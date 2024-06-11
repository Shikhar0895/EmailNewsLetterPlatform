import mongoose from "mongoose";

const { Schema } = mongoose;
const subscriberSchema = new Schema(
  {
    email: { type: String },
    newsLetterOwnerId: { type: String },
    source: { type: String, default: "ByShikharS" },
    status: { type: String, default: "subscribed" },
  },
  { timestamps: true }
);

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;
