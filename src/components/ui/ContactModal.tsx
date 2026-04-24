import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiPaperclip } from "react-icons/fi";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const [files, setFiles] = useState<File[]>([]);
    const [showSendOptions, setShowSendOptions] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);

    const [scheduleDate, setScheduleDate] = useState("");
    const [scheduleTime, setScheduleTime] = useState("");

    const sendOptionsRef = useRef<HTMLDivElement>(null);
    const scheduleRef = useRef<HTMLDivElement>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [errors, setErrors] = useState({
        subject: "",
        message: "",
    });

    // ESC close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const validate = () => {
        const newErrors = {
            subject: "",
            message: "",
        };

        if (!subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        return !newErrors.subject && !newErrors.message;
    };



    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;

            if (
                sendOptionsRef.current &&
                !sendOptionsRef.current.contains(target)
            ) {
                setShowSendOptions(false);
            }

            if (
                scheduleRef.current &&
                !scheduleRef.current.contains(target)
            ) {
                setShowSchedule(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handle file upload
    const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setFiles([...files, ...Array.from(e.target.files)]);
    };

    const handleSend = (type: "now" | "schedule") => {
        if (!validate()) return;

        setSent(true);

        setTimeout(() => {
            setSent(false);
            setSubject("");
            setMessage("");
            setFiles([]);
            setShowSchedule(false);
            setErrors({ subject: "", message: "" });
            onClose();
        }, 1500);
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
                        className="fixed bottom-0 right-0 md:right-10 w-full md:w-[420px] bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-t-2xl md:rounded-xl shadow-2xl z-[210] flex flex-col"
                    >
                        {/* HEADER */}
                        <div className="flex justify-between items-center px-4 py-3 border-b">
                            <h3 className="text-sm font-semibold">New Message</h3>
                            <button onClick={onClose}>✕</button>
                        </div>

                        {/* FORM */}
                        <div className="px-4 py-3 flex flex-col gap-3">

                            <input
                                value="sonidhruvit7000@gmail.com"
                                readOnly
                                className="text-sm border-b py-1 bg-transparent"
                            />

                            <input
                                value={subject}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                    if (errors.subject) setErrors({ ...errors, subject: "" });
                                }}
                                placeholder="Subject"
                                className={`text-sm border-b py-1 bg-transparent ${errors.subject ? "border-red-500" : ""
                                    }`}
                            />

                            {errors.subject && (
                                <p className="text-xs text-red-500">{errors.subject}</p>
                            )}

                            <textarea
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    if (errors.message) setErrors({ ...errors, message: "" });
                                }}
                                placeholder="Write your message..."
                                rows={5}
                                className={`text-sm outline-none resize-none ${errors.message ? "border border-red-500 rounded px-2 py-1" : ""
                                    }`}
                            />

                            {errors.message && (
                                <p className="text-xs text-red-500">{errors.message}</p>
                            )}

                            {/* FILE PREVIEW */}
                            {files.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {files.map((file, i) => (
                                        <div
                                            key={i}
                                            className="
                                                flex items-center gap-2
                                                bg-gray-200 dark:bg-gray-700
                                                px-2 py-1 rounded-lg
                                                text-xs max-w-[160px]
                                            "
                                        >
                                            {/* File name */}
                                            <span className="max-w-[120px] truncate">
                                                {file.name}
                                            </span>

                                            {/* Remove button */}
                                            <button
                                                onClick={() => {
                                                    setFiles(files.filter((_, index) => index !== i));
                                                }}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* SCHEDULE UI */}
                            {/* {showSchedule && (
                                <div className="absolute bottom-14 right-0 z-[400] w-64 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4"> */}

                            {showSchedule && (
                                <div
                                    ref={scheduleRef}
                                    className="absolute bottom-14 right-0 z-[400] w-64 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4"
                                >
                                    {/* TITLE */}
                                    <p className="text-sm font-semibold mb-3">
                                        Schedule send
                                    </p>

                                    {/* DATE + TIME */}
                                    <div className="flex flex-col gap-3">

                                        <input
                                            type="date"
                                            value={scheduleDate}
                                            onChange={(e) => setScheduleDate(e.target.value)}
                                            className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-transparent"
                                        />

                                        <input
                                            type="time"
                                            value={scheduleTime}
                                            onChange={(e) => setScheduleTime(e.target.value)}
                                            className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-transparent"
                                        />

                                    </div>

                                    {/* ACTIONS */}
                                    <div className="flex justify-end gap-2 mt-4">

                                        <button
                                            onClick={() => setShowSchedule(false)}
                                            className="text-sm px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            onClick={() => handleSend("schedule")}
                                            disabled={
                                                !subject.trim() ||
                                                !message.trim() ||
                                                !scheduleDate ||
                                                !scheduleTime
                                            }
                                            className={`
    px-3 py-1 rounded text-sm font-medium transition
    ${subject.trim() &&
                                                    message.trim() &&
                                                    scheduleDate &&
                                                    scheduleTime
                                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                                                }
  `}
                                        >
                                            Schedule
                                        </button>

                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ACTION BAR */}
                        <div className="flex justify-between items-center px-4 py-3 border-t">

                            {/* LEFT */}
                            <div className="flex gap-3">

                                {/* ATTACH */}
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="text-gray-500 hover:text-black dark:hover:text-white transition"
                                >
                                    <FiPaperclip size={18} />
                                </button>
                                <input
                                    type="file"
                                    multiple
                                    ref={fileInputRef}
                                    onChange={handleFiles}
                                    className="hidden"
                                />


                            </div>

                            {/* SEND WITH DROPDOWN */}
                            <div className="relative">

                                <div className="flex">
                                    <button
                                        onClick={() => handleSend("now")}
                                        disabled={!subject.trim() || !message.trim()}
                                        className={`
    px-4 py-1.5 rounded-l-lg text-sm font-medium transition
    ${subject.trim() && message.trim()
                                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                                : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                                            }
  `}
                                    >
                                        Send
                                    </button>

                                    <button
                                        onClick={() => setShowSendOptions(!showSendOptions)}
                                        className="bg-blue-600 text-white px-2 rounded-r-lg border-l border-blue-500"
                                    >
                                        ▼
                                    </button>
                                </div>

                                {/* DROPDOWN */}
                                {/* {showSendOptions && (
                                    <div className="absolute bottom-12 right-0 w-40 bg-white dark:bg-[#2a2a2a] border rounded shadow text-sm"> */}
                                {showSendOptions && (
                                    <div
                                        ref={sendOptionsRef}
                                        className="absolute bottom-12 right-0 w-40 bg-white dark:bg-[#2a2a2a] border rounded shadow text-sm"
                                    >

                                        <button
                                            onClick={() => {
                                                setShowSchedule(true);
                                                setShowSendOptions(false);
                                            }}
                                            className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            Schedule send
                                        </button>

                                    </div>
                                )}
                            </div>
                        </div>

                        {/* SUCCESS */}
                        <AnimatePresence>
                            {sent && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute bottom-20 right-4 bg-green-500 text-white text-xs px-3 py-2 rounded"
                                >
                                    {showSchedule
                                        ? "Scheduled (UI only)"
                                        : "Message sent (UI only)"}
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}