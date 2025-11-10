import { createClient } from "redis";

async function startPublisher() {
  const publisher = createClient();
  await publisher.connect();
  console.log("🚀 Publisher connected to Redis.");

  // Send a message every 3 seconds
  setInterval(() => {
    const message = `Breaking News @ ${new Date().toLocaleTimeString()}`;
    publisher.publish("news", message);
    console.log("📢 Published:", message);
  }, 3000);
}

startPublisher();
