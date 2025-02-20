"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AudiencePoll() {
  const [votes, setVotes] = useState({ human: 0, ai: 0 });

  const totalVotes = votes.human + votes.ai;
  const getPercentage = (value: number) =>
    totalVotes === 0 ? 0 : (value / totalVotes) * 100;

  return (
    <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-xl p-4 rounded-3xl">
      <h2 className="text-lg text-white font-semibold mb-4">Audience Poll</h2>
      <div className="space-y-4">
        <div className="relative h-12">
          <div className="absolute inset-0 bg-gray-100 rounded-lg" />
          <motion.div
            className="absolute inset-y-0 left-0 bg-blue-200 rounded-lg"
            initial={{ width: "0%" }}
            animate={{ width: `${getPercentage(votes.human)}%` }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 flex items-center justify-between px-3">
            <span className="font-medium">Human PMs</span>
            <span>{getPercentage(votes.human).toFixed(1)}%</span>
          </div>
        </div>

        <div className="relative h-12">
          <div className="absolute inset-0 bg-gray-100 rounded-lg" />
          <motion.div
            className="absolute inset-y-0 left-0 bg-green-200 rounded-lg"
            initial={{ width: "0%" }}
            animate={{ width: `${getPercentage(votes.ai)}%` }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 flex items-center justify-between px-3">
            <span className="font-medium">AI</span>
            <span>{getPercentage(votes.ai).toFixed(1)}%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button
            variant="outline"
            className="border-blue-500/50 hover:bg-blue-500/20"
            onClick={() =>
              setVotes((prev) => ({ ...prev, human: prev.human + 1 }))
            }
          >
            Vote Human
          </Button>
          <Button
            variant="outline"
            className="border-green-500/50 hover:bg-green-500/20"
            onClick={() => setVotes((prev) => ({ ...prev, ai: prev.ai + 1 }))}
          >
            Vote AI
          </Button>
        </div>
      </div>
    </Card>
  );
}
