import {
    motion,
    AnimatePresence,
} from "framer-motion";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    FiPaperclip,
    FiClock,
    FiSend,
} from "react-icons/fi";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function ContactModal({
    open,
    onClose,
}: Props) {

    const [subject, setSubject] =
        useState("");

    const [message, setMessage] =
        useState("");

    const [sent, setSent] =
        useState(false);

    const [files, setFiles] =
        useState<File[]>([]);

    const [showSendOptions, setShowSendOptions] =
        useState(false);

    const [showSchedule, setShowSchedule] =
        useState(false);

    const [scheduleDate, setScheduleDate] =
        useState("");

    const [scheduleTime, setScheduleTime] =
        useState("");

    const sendOptionsRef =
        useRef<HTMLDivElement>(null);

    const scheduleRef =
        useRef<HTMLDivElement>(null);

    const fileInputRef =
        useRef<HTMLInputElement>(null);

    const [errors, setErrors] = useState({
        subject: "",
        message: "",
    });

    // ESC CLOSE
    useEffect(() => {

        const handleEsc = (
            e: KeyboardEvent
        ) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener(
            "keydown",
            handleEsc
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleEsc
            );
        };

    }, [onClose]);

    // OUTSIDE CLICK
    useEffect(() => {

        const handleClickOutside = (
            e: MouseEvent
        ) => {

            const target =
                e.target as Node;

            if (
                sendOptionsRef.current &&
                !sendOptionsRef.current.contains(
                    target
                )
            ) {
                setShowSendOptions(false);
            }

            if (
                scheduleRef.current &&
                !scheduleRef.current.contains(
                    target
                )
            ) {
                setShowSchedule(false);
            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    // VALIDATION
    const validate = () => {

        const newErrors = {
            subject: "",
            message: "",
        };

        if (!subject.trim()) {
            newErrors.subject =
                "Subject is required";
        }

        if (!message.trim()) {
            newErrors.message =
                "Message is required";
        }

        setErrors(newErrors);

        return (
            !newErrors.subject &&
            !newErrors.message
        );
    };

    // FILE UPLOAD
    const handleFiles = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (!e.target.files) return;

        setFiles([
            ...files,
            ...Array.from(e.target.files),
        ]);
    };

    // SEND
    const handleSend = (
        type: "now" | "schedule"
    ) => {

        if (!validate()) return;

        setSent(true);

        setTimeout(() => {

            setSent(false);

            setSubject("");

            setMessage("");

            setFiles([]);

            setShowSchedule(false);

            setErrors({
                subject: "",
                message: "",
            });

            onClose();

        }, 1500);
    };

    return (
        <AnimatePresence>

            {open && (
                <>

                    {/* BACKDROP */}
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={onClose}
                        className="
                            fixed
                            inset-0
                            z-[200]
                            bg-black/50
                            backdrop-blur-md
                        "
                    />

                    {/* MODAL */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 60,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 60,
                            scale: 0.96,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                        className="
    fixed
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2

    w-[95vw]
    max-w-[460px]

    max-h-[90vh]
    overflow-hidden

    rounded-[32px]

    border
    border-gray-200
    dark:border-white/10

    bg-white/80
    dark:bg-[#0f0f10]/90

    backdrop-blur-2xl

    shadow-[0_20px_80px_rgba(0,0,0,0.25)]

    z-[210]
"
                    >

                        {/* TOP LIGHT */}
                        <div
                            className="
                                absolute
                                top-0
                                left-0
                                h-[2px]
                                w-full
                                bg-gradient-to-r
                                from-transparent
                                via-blue-500/60
                                to-transparent
                            "
                        />

                        {/* HEADER */}
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                px-6
                                py-5
                                border-b
                                border-gray-200
                                dark:border-white/10
                            "
                        >

                            <div>

                                <p
                                    className="
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        text-blue-500
                                        font-medium
                                        mb-1
                                    "
                                >
                                    New Opportunity
                                </p>

                                <h3
                                    className="
                                        text-lg
                                        font-semibold
                                    "
                                >
                                    Contact Me
                                </h3>

                            </div>

                            <button
                                onClick={onClose}
                                className="
                                    w-9
                                    h-9
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    hover:bg-black/5
                                    dark:hover:bg-white/10
                                    transition
                                "
                            >
                                ✕
                            </button>

                        </div>

                        {/* BODY */}
                        <div
                            className="
        p-6
        space-y-5
        overflow-y-auto
        max-h-[calc(90vh-160px)]
    "
                        >

                            {/* EMAIL */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        mb-2
                                    "
                                >
                                    To
                                </label>

                                <input
                                    value="sonidhruvit7000@gmail.com"
                                    readOnly
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        dark:border-white/10
                                        bg-white/60
                                        dark:bg-white/[0.03]
                                        px-4
                                        py-3.5
                                        outline-none
                                    "
                                />

                            </div>

                            {/* SUBJECT */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        mb-2
                                    "
                                >
                                    Subject
                                </label>

                                <input
                                    value={subject}
                                    onChange={(e) => {
                                        setSubject(
                                            e.target.value
                                        );

                                        if (
                                            errors.subject
                                        ) {
                                            setErrors({
                                                ...errors,
                                                subject: "",
                                            });
                                        }
                                    }}
                                    placeholder="Frontend Developer Opportunity"
                                    className={`
                                        w-full
                                        rounded-2xl
                                        border
                                        px-4
                                        py-3.5
                                        outline-none
                                        transition-all
                                        duration-300
                                        bg-white/60
                                        dark:bg-white/[0.03]
                                        backdrop-blur-xl
                                        ${errors.subject
                                            ? "border-red-500"
                                            : "border-gray-200 dark:border-white/10 focus:border-blue-500/30 focus:ring-4 focus:ring-blue-500/10"
                                        }
                                    `}
                                />

                                {errors.subject && (
                                    <p className="text-xs text-red-500 mt-2">
                                        {errors.subject}
                                    </p>
                                )}

                            </div>

                            {/* MESSAGE */}
                            <div>

                                <label
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        mb-2
                                    "
                                >
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    value={message}
                                    onChange={(e) => {

                                        setMessage(
                                            e.target.value
                                        );

                                        if (
                                            errors.message
                                        ) {
                                            setErrors({
                                                ...errors,
                                                message: "",
                                            });
                                        }

                                    }}
                                    placeholder="Tell me about the role, company, or opportunity..."
                                    className={`
                                        w-full
                                        rounded-2xl
                                        border
                                        px-4
                                        py-3.5
                                        outline-none
                                        resize-none
                                        transition-all
                                        duration-300
                                        bg-white/60
                                        dark:bg-white/[0.03]
                                        backdrop-blur-xl
                                        ${errors.message
                                            ? "border-red-500"
                                            : "border-gray-200 dark:border-white/10 focus:border-blue-500/30 focus:ring-4 focus:ring-blue-500/10"
                                        }
                                    `}
                                />

                                {errors.message && (
                                    <p className="text-xs text-red-500 mt-2">
                                        {errors.message}
                                    </p>
                                )}

                            </div>

                            {/* FILES */}
                            {files.length > 0 && (

                                <div className="flex flex-wrap gap-2">

                                    {files.map(
                                        (
                                            file,
                                            i
                                        ) => (

                                            <div
                                                key={i}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2
                                                    rounded-xl
                                                    border
                                                    border-gray-200
                                                    dark:border-white/10
                                                    bg-white/50
                                                    dark:bg-white/[0.03]
                                                    px-3
                                                    py-2
                                                    text-xs
                                                "
                                            >

                                                <span className="max-w-[120px] truncate">
                                                    {file.name}
                                                </span>

                                                <button
                                                    onClick={() => {
                                                        setFiles(
                                                            files.filter(
                                                                (
                                                                    _,
                                                                    index
                                                                ) =>
                                                                    index !== i
                                                            )
                                                        );
                                                    }}
                                                    className="text-red-500"
                                                >
                                                    ✕
                                                </button>

                                            </div>

                                        )
                                    )}

                                </div>

                            )}

                        </div>

                        {/* FOOTER */}
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                px-6
                                py-5
                                border-t
                                border-gray-200
                                dark:border-white/10
                            "
                        >

                            {/* LEFT */}
                            <div className="flex items-center gap-3">

                                {/* ATTACH */}
                                <button
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    className="
                                        w-10
                                        h-10
                                        rounded-xl
                                        border
                                        border-gray-200
                                        dark:border-white/10
                                        flex
                                        items-center
                                        justify-center
                                        hover:bg-black/5
                                        dark:hover:bg-white/10
                                        transition
                                    "
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

                            {/* SEND */}
                            <div className="relative">

                                <div className="flex">

                                    {/* SEND BUTTON */}
                                    <button
                                        onClick={() =>
                                            handleSend("now")
                                        }
                                        disabled={
                                            !subject.trim() ||
                                            !message.trim()
                                        }
                                        className={`
                                            flex
                                            items-center
                                            gap-2
                                            px-5
                                            py-3
                                            rounded-l-2xl
                                            text-sm
                                            font-medium
                                            transition-all
                                            duration-300
                                            ${subject.trim() &&
                                                message.trim()
                                                ? "bg-black dark:bg-white text-white dark:text-black hover:scale-[1.02]"
                                                : "bg-gray-200 dark:bg-white/10 text-gray-400 cursor-not-allowed"
                                            }
                                        `}
                                    >

                                        <FiSend />

                                        Send

                                    </button>

                                    {/* DROPDOWN */}
                                    <button
                                        onClick={() =>
                                            setShowSendOptions(
                                                !showSendOptions
                                            )
                                        }
                                        className="
                                            px-3
                                            rounded-r-2xl
                                            bg-black
                                            dark:bg-white
                                            text-white
                                            dark:text-black
                                            border-l
                                            border-white/10
                                        "
                                    >
                                        ▼
                                    </button>

                                </div>

                                {/* OPTIONS */}
                                {showSendOptions && (

                                    <div
                                        ref={sendOptionsRef}
                                        className="
                                            absolute
                                            bottom-14
                                            right-0
                                            w-48
                                            rounded-2xl
                                            overflow-hidden
                                            border
                                            border-gray-200
                                            dark:border-white/10
                                            bg-white
                                            dark:bg-[#161617]
                                            shadow-2xl
                                        "
                                    >

                                        <button
                                            onClick={() => {

                                                setShowSchedule(true);

                                                setShowSendOptions(false);

                                            }}
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                w-full
                                                px-4
                                                py-3
                                                text-sm
                                                hover:bg-black/5
                                                dark:hover:bg-white/5
                                                transition
                                            "
                                        >

                                            <FiClock />

                                            Schedule Send

                                        </button>

                                    </div>

                                )}

                            </div>

                        </div>

                        {/* SCHEDULE POPUP */}
                        {showSchedule && (

                            <div
                                ref={scheduleRef}
                                className="
                                    absolute
                                    bottom-24
                                    right-6
                                    w-[280px]
                                    rounded-3xl
                                    border
                                    border-gray-200
                                    dark:border-white/10
                                    bg-white
                                    dark:bg-[#161617]
                                    p-5
                                    shadow-2xl
                                "
                            >

                                <h4 className="font-semibold mb-4">
                                    Schedule Send
                                </h4>

                                <div className="space-y-3">

                                    <input
                                        type="date"
                                        value={scheduleDate}
                                        onChange={(e) =>
                                            setScheduleDate(
                                                e.target.value
                                            )
                                        }
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            dark:border-white/10
                                            bg-transparent
                                            px-3
                                            py-2.5
                                            outline-none
                                        "
                                    />

                                    <input
                                        type="time"
                                        value={scheduleTime}
                                        onChange={(e) =>
                                            setScheduleTime(
                                                e.target.value
                                            )
                                        }
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-gray-200
                                            dark:border-white/10
                                            bg-transparent
                                            px-3
                                            py-2.5
                                            outline-none
                                        "
                                    />

                                </div>

                                <div className="flex justify-end gap-2 mt-5">

                                    <button
                                        onClick={() =>
                                            setShowSchedule(false)
                                        }
                                        className="
                                            px-4
                                            py-2
                                            rounded-xl
                                            hover:bg-black/5
                                            dark:hover:bg-white/5
                                        "
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleSend("schedule")
                                        }
                                        disabled={
                                            !scheduleDate ||
                                            !scheduleTime
                                        }
                                        className={`
                                            px-4
                                            py-2
                                            rounded-xl
                                            font-medium
                                            transition
                                            ${scheduleDate &&
                                                scheduleTime
                                                ? "bg-black dark:bg-white text-white dark:text-black"
                                                : "bg-gray-200 dark:bg-white/10 text-gray-400 cursor-not-allowed"
                                            }
                                        `}
                                    >
                                        Schedule
                                    </button>

                                </div>

                            </div>

                        )}

                        {/* SUCCESS */}
                        <AnimatePresence>

                            {sent && (

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                    className="
                                        absolute
                                        bottom-24
                                        left-6
                                        rounded-2xl
                                        bg-green-500
                                        text-white
                                        px-4
                                        py-3
                                        text-sm
                                        shadow-xl
                                    "
                                >
                                    {showSchedule
                                        ? "Message scheduled"
                                        : "Message sent"}
                                </motion.div>

                            )}

                        </AnimatePresence>

                    </motion.div>

                </>
            )}

        </AnimatePresence>
    );
}


























// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { FiPaperclip } from "react-icons/fi";

// interface Props {
//     open: boolean;
//     onClose: () => void;
// }

// export default function ContactModal({ open, onClose }: Props) {
//     const [subject, setSubject] = useState("");
//     const [message, setMessage] = useState("");
//     const [sent, setSent] = useState(false);

//     const [files, setFiles] = useState<File[]>([]);
//     const [showSendOptions, setShowSendOptions] = useState(false);
//     const [showSchedule, setShowSchedule] = useState(false);

//     const [scheduleDate, setScheduleDate] = useState("");
//     const [scheduleTime, setScheduleTime] = useState("");

//     const sendOptionsRef = useRef<HTMLDivElement>(null);
//     const scheduleRef = useRef<HTMLDivElement>(null);

//     const fileInputRef = useRef<HTMLInputElement>(null);

//     const [errors, setErrors] = useState({
//         subject: "",
//         message: "",
//     });

//     // ESC close
//     useEffect(() => {
//         const handleEsc = (e: KeyboardEvent) => {
//             if (e.key === "Escape") onClose();
//         };
//         window.addEventListener("keydown", handleEsc);
//         return () => window.removeEventListener("keydown", handleEsc);
//     }, [onClose]);

//     const validate = () => {
//         const newErrors = {
//             subject: "",
//             message: "",
//         };

//         if (!subject.trim()) {
//             newErrors.subject = "Subject is required";
//         }

//         if (!message.trim()) {
//             newErrors.message = "Message is required";
//         }

//         setErrors(newErrors);

//         return !newErrors.subject && !newErrors.message;
//     };



//     useEffect(() => {
//         const handleClickOutside = (e: MouseEvent) => {
//             const target = e.target as Node;

//             if (
//                 sendOptionsRef.current &&
//                 !sendOptionsRef.current.contains(target)
//             ) {
//                 setShowSendOptions(false);
//             }

//             if (
//                 scheduleRef.current &&
//                 !scheduleRef.current.contains(target)
//             ) {
//                 setShowSchedule(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     // Handle file upload
//     const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (!e.target.files) return;
//         setFiles([...files, ...Array.from(e.target.files)]);
//     };

//     const handleSend = (type: "now" | "schedule") => {
//         if (!validate()) return;

//         setSent(true);

//         setTimeout(() => {
//             setSent(false);
//             setSubject("");
//             setMessage("");
//             setFiles([]);
//             setShowSchedule(false);
//             setErrors({ subject: "", message: "" });
//             onClose();
//         }, 1500);
//     };

//     return (
//         <AnimatePresence>
//             {open && (
//                 <>
//                     {/* BACKDROP */}
//                     <motion.div
//                         className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={onClose}
//                     />

//                     {/* MODAL */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 80, scale: 0.96 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 80, scale: 0.96 }}
//                         className="fixed bottom-0 right-0 md:right-10 w-full md:w-[420px] bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-t-2xl md:rounded-xl shadow-2xl z-[210] flex flex-col"
//                     >
//                         {/* HEADER */}
//                         <div className="flex justify-between items-center px-4 py-3 border-b">
//                             <h3 className="text-sm font-semibold">New Message</h3>
//                             <button onClick={onClose}>✕</button>
//                         </div>

//                         {/* FORM */}
//                         <div className="px-4 py-3 flex flex-col gap-3">

//                             <input
//                                 value="sonidhruvit7000@gmail.com"
//                                 readOnly
//                                 className="text-sm border-b py-1 bg-transparent"
//                             />

//                             <input
//                                 value={subject}
//                                 onChange={(e) => {
//                                     setSubject(e.target.value);
//                                     if (errors.subject) setErrors({ ...errors, subject: "" });
//                                 }}
//                                 placeholder="Subject"
//                                 className={`text-sm border-b py-1 bg-transparent ${errors.subject ? "border-red-500" : ""
//                                     }`}
//                             />

//                             {errors.subject && (
//                                 <p className="text-xs text-red-500">{errors.subject}</p>
//                             )}

//                             <textarea
//                                 value={message}
//                                 onChange={(e) => {
//                                     setMessage(e.target.value);
//                                     if (errors.message) setErrors({ ...errors, message: "" });
//                                 }}
//                                 placeholder="Write your message..."
//                                 rows={5}
//                                 className={`text-sm outline-none resize-none ${errors.message ? "border border-red-500 rounded px-2 py-1" : ""
//                                     }`}
//                             />

//                             {errors.message && (
//                                 <p className="text-xs text-red-500">{errors.message}</p>
//                             )}

//                             {/* FILE PREVIEW */}
//                             {files.length > 0 && (
//                                 <div className="flex flex-wrap gap-2 mt-2">
//                                     {files.map((file, i) => (
//                                         <div
//                                             key={i}
//                                             className="
//                                                 flex items-center gap-2
//                                                 bg-gray-200 dark:bg-gray-700
//                                                 px-2 py-1 rounded-lg
//                                                 text-xs max-w-[160px]
//                                             "
//                                         >
//                                             {/* File name */}
//                                             <span className="max-w-[120px] truncate">
//                                                 {file.name}
//                                             </span>

//                                             {/* Remove button */}
//                                             <button
//                                                 onClick={() => {
//                                                     setFiles(files.filter((_, index) => index !== i));
//                                                 }}
//                                                 className="text-red-500 hover:text-red-700"
//                                             >
//                                                 ✕
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* SCHEDULE UI */}
//                             {/* {showSchedule && (
//                                 <div className="absolute bottom-14 right-0 z-[400] w-64 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4"> */}

//                             {showSchedule && (
//                                 <div
//                                     ref={scheduleRef}
//                                     className="absolute bottom-14 right-0 z-[400] w-64 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4"
//                                 >
//                                     {/* TITLE */}
//                                     <p className="text-sm font-semibold mb-3">
//                                         Schedule send
//                                     </p>

//                                     {/* DATE + TIME */}
//                                     <div className="flex flex-col gap-3">

//                                         <input
//                                             type="date"
//                                             value={scheduleDate}
//                                             onChange={(e) => setScheduleDate(e.target.value)}
//                                             className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-transparent"
//                                         />

//                                         <input
//                                             type="time"
//                                             value={scheduleTime}
//                                             onChange={(e) => setScheduleTime(e.target.value)}
//                                             className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-transparent"
//                                         />

//                                     </div>

//                                     {/* ACTIONS */}
//                                     <div className="flex justify-end gap-2 mt-4">

//                                         <button
//                                             onClick={() => setShowSchedule(false)}
//                                             className="text-sm px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
//                                         >
//                                             Cancel
//                                         </button>

//                                         <button
//                                             onClick={() => handleSend("schedule")}
//                                             disabled={
//                                                 !subject.trim() ||
//                                                 !message.trim() ||
//                                                 !scheduleDate ||
//                                                 !scheduleTime
//                                             }
//                                             className={`
//     px-3 py-1 rounded text-sm font-medium transition
//     ${subject.trim() &&
//                                                     message.trim() &&
//                                                     scheduleDate &&
//                                                     scheduleTime
//                                                     ? "bg-blue-600 text-white hover:bg-blue-700"
//                                                     : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
//                                                 }
//   `}
//                                         >
//                                             Schedule
//                                         </button>

//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* ACTION BAR */}
//                         <div className="flex justify-between items-center px-4 py-3 border-t">

//                             {/* LEFT */}
//                             <div className="flex gap-3">

//                                 {/* ATTACH */}
//                                 <button
//                                     onClick={() => fileInputRef.current?.click()}
//                                     className="text-gray-500 hover:text-black dark:hover:text-white transition"
//                                 >
//                                     <FiPaperclip size={18} />
//                                 </button>
//                                 <input
//                                     type="file"
//                                     multiple
//                                     ref={fileInputRef}
//                                     onChange={handleFiles}
//                                     className="hidden"
//                                 />


//                             </div>

//                             {/* SEND WITH DROPDOWN */}
//                             <div className="relative">

//                                 <div className="flex">
//                                     <button
//                                         onClick={() => handleSend("now")}
//                                         disabled={!subject.trim() || !message.trim()}
//                                         className={`
//     px-4 py-1.5 rounded-l-lg text-sm font-medium transition
//     ${subject.trim() && message.trim()
//                                                 ? "bg-blue-600 text-white hover:bg-blue-700"
//                                                 : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
//                                             }
//   `}
//                                     >
//                                         Send
//                                     </button>

//                                     <button
//                                         onClick={() => setShowSendOptions(!showSendOptions)}
//                                         className="bg-blue-600 text-white px-2 rounded-r-lg border-l border-blue-500"
//                                     >
//                                         ▼
//                                     </button>
//                                 </div>

//                                 {/* DROPDOWN */}
//                                 {/* {showSendOptions && (
//                                     <div className="absolute bottom-12 right-0 w-40 bg-white dark:bg-[#2a2a2a] border rounded shadow text-sm"> */}
//                                 {showSendOptions && (
//                                     <div
//                                         ref={sendOptionsRef}
//                                         className="absolute bottom-12 right-0 w-40 bg-white dark:bg-[#2a2a2a] border rounded shadow text-sm"
//                                     >

//                                         <button
//                                             onClick={() => {
//                                                 setShowSchedule(true);
//                                                 setShowSendOptions(false);
//                                             }}
//                                             className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//                                         >
//                                             Schedule send
//                                         </button>

//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* SUCCESS */}
//                         <AnimatePresence>
//                             {sent && (
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     exit={{ opacity: 0 }}
//                                     className="absolute bottom-20 right-4 bg-green-500 text-white text-xs px-3 py-2 rounded"
//                                 >
//                                     {showSchedule
//                                         ? "Scheduled (UI only)"
//                                         : "Message sent (UI only)"}
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>

//                     </motion.div>
//                 </>
//             )}
//         </AnimatePresence>
//     );
// }