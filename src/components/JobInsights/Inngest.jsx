// inngest/functions/fetch-insights.ts

import { inngest } from "@/inngest";
import fetch from "node-fetch"; // or axios

export const fetchInsights = inngest.createFunction(
  { id: "fetch-insights" },
  { event: "app/trigger.fetch-insights" },
  async ({ event, step }) => {
    const { keyword, location } = event.data;

    const insights = await step.run("fetch-insights-data", async () => {
      // Replace with actual data fetching logic (e.g., from Glassdoor proxy or scraping service)
      return {
        results: [
          { title: "Software Engineer", company: "TCS", location: "Bangalore" },
          { title: "Backend Developer", company: "Flipkart", location: "Bangalore" },
        ],
      };
    });

    return insights;
  }
);
