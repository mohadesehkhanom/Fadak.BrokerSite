module.exports = {
    apps: [
        {
            name: "fadak-1",
            script: "npm",
            args: "run start -- -p 3000 -H localhost",
            cwd: "/home/nextapp/apps/fadak",
            exec_mode: "fork",
            autorestart: true,
            watch: false,
            max_memory_restart: "512M",
            env: { NODE_ENV: "production" },
            error_file: "/home/nextapp/logs/fadak-1-error.log",
            out_file: "/home/nextapp/logs/fadak-1-out.log",
            pid_file: "/home/nextapp/logs/fadak-1.pid",
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            merge_logs: true
        },
        {
            name: "fadak-2",
            script: "npm",
            args: "run start -- -p 3001 -H localhost",
            cwd: "/home/nextapp/apps/fadak",
            exec_mode: "fork",
            autorestart: true,
            watch: false,
            max_memory_restart: "512M",
            env: { NODE_ENV: "production" },
            error_file: "/home/nextapp/logs/fadak-2-error.log",
            out_file: "/home/nextapp/logs/fadak-2-out.log",
            pid_file: "/home/nextapp/logs/fadak-2.pid",
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            merge_logs: true
        },
        {
            name: "fadak-3",
            script: "npm",
            args: "run start -- -p 3002 -H localhost",
            cwd: "/home/nextapp/apps/fadak",
            exec_mode: "fork",
            autorestart: true,
            watch: false,
            max_memory_restart: "512M",
            env: { NODE_ENV: "production" },
            error_file: "/home/nextapp/logs/fadak-3-error.log",
            out_file: "/home/nextapp/logs/fadak-3-out.log",
            pid_file: "/home/nextapp/logs/fadak-3.pid",
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            merge_logs: true
        }
    ]
};
