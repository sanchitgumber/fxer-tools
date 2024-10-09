"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Card className="m-2">
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/backgroundRemover">
              <motion.div
                className="border p-4 mt-4 md:ml-2 cursor-pointer rounded-lg shadow-md bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center text-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                Background Remover
              </motion.div>
            </Link>
            <Link href="/ImageToText">
              <motion.div
                className="relative border p-4 mt-4 md:ml-2 cursor-pointer rounded-lg shadow-lg text-white bg-gradient-to-r from-blue-400 to-teal-500 text-center text-2xl"
                whileHover={{ scale: 1.05 }}

                transition={{ duration: 0.2, ease: "linear" }}
              >
                Image to text
              </motion.div>
            </Link>
            <Link href="/textBackground">
              <motion.div
                className="border p-4 mt-4 md:ml-2 cursor-pointer rounded-lg shadow-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center text-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Text Background
              </motion.div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
