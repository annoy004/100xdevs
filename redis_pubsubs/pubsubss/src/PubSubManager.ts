import { createClient, RedisClientType } from "redis";

export class PubSubManager {
  private static instance: PubSubManager;
  private redisClient: RedisClientType;
  private subscriptions: Map<string, string[]>;

  private constructor() {
    this.redisClient = createClient();
    this.subscriptions = new Map();

    // Connect safely to Redis
    this.connectToRedis();
  }

  private async connectToRedis() {
    try {
      await this.redisClient.connect();
      console.log("✅ PubSubManager connected to Redis.");
    } catch (err) {
      console.error("❌ Failed to connect to Redis:", err);
    }
  }

  public static getInstance(): PubSubManager {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }

  public async userSubscribe(userId: string, stock: string) {
    if (!this.subscriptions.has(stock)) {
      this.subscriptions.set(stock, []);
    }

    this.subscriptions.get(stock)?.push(userId);

    // Only subscribe once per channel
    if (this.subscriptions.get(stock)?.length === 1) {
      await this.redisClient.subscribe(stock, (message) => {
        this.handleMessage(stock, message);
      });
      console.log(`🟢 Subscribed to Redis channel: ${stock}`);
    }
  }

  public async userUnSubscribe(userId: string, stock: string) {
    const current = this.subscriptions.get(stock) || [];
    const updated = current.filter((id) => id !== userId);
    this.subscriptions.set(stock, updated);

    if (updated.length === 0) {
      await this.redisClient.unsubscribe(stock);
      console.log(`🔴 Unsubscribed from Redis channel: ${stock}`);
    }
  }

  private handleMessage(stock: string, message: string) {
    console.log(`📩 Message received on channel [${stock}]: ${message}`);
    this.subscriptions.get(stock)?.forEach((sub) => {
      console.log(`📤 Sending message to user: ${sub}`);
    });
  }
}
