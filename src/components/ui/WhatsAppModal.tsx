import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WhatsAppModal({ open, onClose }: Props) {
  const [message, setMessage] = useState("");

  const whatsappNumber = "919XXXXXXXXX"; // 👉 replace

  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSend = () => {
    if (!message.trim()) return;

    const encoded = encodeURIComponent(message);
    const link = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    window.open(link, "_blank");
    setMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.96 }}
            className="fixed bottom-0 right-0 md:right-10 w-full md:w-[380px] bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-t-2xl md:rounded-xl shadow-2xl z-[210] flex flex-col"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h3 className="text-sm font-semibold">WhatsApp Message</h3>
              <button onClick={onClose}>✕</button>
            </div>

            {/* BODY */}
            <div className="px-4 py-3 flex flex-col gap-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                rows={5}
                className="text-sm outline-none resize-none border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-transparent"
              />

              <p className="text-xs text-gray-400">
                This will open WhatsApp with your message.
              </p>
            </div>

            {/* ACTION */}
            <div className="flex justify-end px-4 py-3 border-t">
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition
                  ${
                    message.trim()
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                  }
                `}
              >
                Send via WhatsApp
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}