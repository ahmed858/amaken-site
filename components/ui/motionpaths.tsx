import { motion } from 'framer-motion';

export default function MotionPaths() {
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 2.5, ease: "easeInOut" }
        }
    };

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <svg width="100%" height="100%" viewBox="0 0 1000 1000">
                <motion.path
                    d="M150 200 L280 200 L280 80    "
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.path
                    d="M180 140 L185 140 L185 130    "
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
                {/* Shape 1 - Top Left */}
                {/* <motion.path
                    d="M150 200 L280 200 L280 320 L150 320 Z"
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                /> */}

                {/* Shape 2 - Top Center */}
                {/* <motion.path
                    d="M350 150 L450 150 L450 250 L350 250"
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3, duration: 2.5, ease: "easeInOut" }}
                /> */}

                {/* Shape 3 - Left Diagonal */}
                {/* <motion.path
                    d="M200 280 L300 400 L300 380"
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6, duration: 2.5, ease: "easeInOut" }}
                /> */}

                {/* Shape 4 - Middle Complex */}
                {/* <motion.path
                    d="M450 350 L550 350 L550 500 L650 500 L650 600"
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.9, duration: 2.5, ease: "easeInOut" }}
                /> */}

                {/* Shape 5 - Bottom Left */}
                {/* <motion.path
                    d="M400 550 L500 600 L400 650 L300 600 Z"
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2, duration: 2.5, ease: "easeInOut" }}
                /> */}

                {/* Shape 6 - Bottom Right */}
                {/* <motion.path
                    d="M700 600 L800 600 L800 750 L700 750 Z"
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.5, duration: 2.5, ease: "easeInOut" }}
                /> */}

                {/* Shape 7 - Right Corner */}
                {/* <motion.path
                    d="M850 650 L950 650 L950 800 L850 800"
                    stroke="#000000"
                    strokeWidth="3"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.8, duration: 2.5, ease: "easeInOut" }}
                /> */}
            </svg>
        </div>
    );
}