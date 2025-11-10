import { PubSubManager } from "./PubSubManager";

async function main() {
  const manager = PubSubManager.getInstance();

  await manager.userSubscribe("user1", "news");
  await manager.userSubscribe("user2", "news");

  console.log("👂 Waiting for messages...");
}

main();
