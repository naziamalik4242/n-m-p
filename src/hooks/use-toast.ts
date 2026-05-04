"use client";
import { useState, useEffect } from "react";

export type ToastType = "success" | "error" | null;

export const useToast = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<ToastType>(null);

  const showToast = (msg: string, toastType: ToastType = "success") => {
    setMessage(msg);
    setType(toastType);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setType(null);
      }, 3000); // 3 seconds baad gayab ho jayega
      return () => clearTimeout(timer);
    }
  }, [message]);

  return { message, type, showToast };
};