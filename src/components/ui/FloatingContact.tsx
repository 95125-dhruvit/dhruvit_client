import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";
import WhatsAppModal from "./WhatsAppModal";

export default function FloatingContact() {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openWhatsapp, setOpenWhatsapp] = useState(false);

    return (
        <>
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">

                {/* OPTIONS */}
                <AnimatePresence>
                    {open && (
                        <>
                            {/* WhatsApp */}
                            {/* <motion.button
                                onClick={() => {
                                    setOpen(false);
                                    setOpenWhatsapp(true);
                                }}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm"
                            >
                                WhatsApp
                            </motion.button> */}
                            <motion.a
                                href="https://wa.me/919512510625" // 👉 replace with your number
                                target="_blank"
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm"
                            >
                                WhatsApp
                            </motion.a>

                            {/* Gmail */}
                            <motion.button
                                onClick={() => {
                                    setOpen(false);
                                    setOpenModal(true);
                                }}
                                className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg text-sm"
                            >
                                Gmail
                            </motion.button>
                        </>
                    )}
                </AnimatePresence>

                {/* MAIN BUTTON */}
                <motion.button
                    onClick={() => setOpen(!open)}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-xl"
                >
                    {open ? "✕" : "💬"}
                </motion.button>
            </div>

            <WhatsAppModal
                open={openWhatsapp}
                onClose={() => setOpenWhatsapp(false)}
            />
            <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}