import { motion } from "framer-motion";

interface ChartNodeProps {
  title: string;
  delay?: number;
  variant?: "primary" | "secondary" | "department";
}

const ChartNode = ({
  title,
  delay = 0,
  variant = "primary",
}: ChartNodeProps) => {
  const baseClasses =
    "relative text-center font-heading font-medium whitespace-nowrap transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground text-xs px-5 py-2.5 rounded-md shadow-md",
    secondary:
      "bg-primary/90 text-primary-foreground text-[10px] px-3 py-2 rounded-md shadow-sm",
    department:
      "bg-primary-light/90 text-primary-foreground text-[9px] px-3 py-1.5 rounded-md",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -3,
        scale: 1.04,
        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {title}

      {/* subtle glow */}
      <span className="pointer-events-none absolute inset-0 rounded-md bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const VerticalLine = ({
  height = "h-6",
  delay = 0,
}: {
  height?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ scaleY: 0, opacity: 0 }}
    whileInView={{ scaleY: 1, opacity: 1 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    className={`w-[2px] ${height} mx-auto origin-top bg-gradient-to-b from-primary via-primary/50 to-primary/10`}
  />
);

const HorizontalLine = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative h-[2px] w-full origin-left bg-gradient-to-r from-primary/10 via-primary to-primary/10"
  >
    {/* flowing dot */}
    <motion.span
      initial={{ x: 0 }}
      animate={{ x: "100%" }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-3px] h-2 w-2 rounded-full bg-primary"
    />
  </motion.div>
);

const departments = [
  {
    name: "Design Dept.",
    teams: ["Architecture & Interior", "Structure Design", "MEP Design"],
  },
  {
    name: "Project Mgmt.",
    teams: ["Costing & Tendering", "Quantity Survey", "Tender Mgmt."],
  },
  {
    name: "Planning",
    teams: ["Project Planning", "Scheduling", "Methodology"],
  },
  {
    name: "HR/Admin",
    teams: ["Recruitment", "Training", "Development"],
  },
  {
    name: "Finance",
    teams: ["Accounting", "Financial Control", "Tax"],
  },
  {
    name: "Procurement",
    teams: ["Materials", "Purchasing", "Logistics"],
  },
];

const OrganizationChart = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="corporate-title text-center mb-12"
        >
          ORGANIZATION CHART
        </motion.h2>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px] mx-auto">
            <div className="flex flex-col items-center">
              <ChartNode title="CEO" delay={0.1} />
              <VerticalLine delay={0.15} />

              <div className="flex items-start justify-center gap-16">
                <ChartNode title="General Manager" delay={0.2} />
                <ChartNode
                  title="Assistant CEO"
                  delay={0.25}
                  variant="secondary"
                />
              </div>

              <VerticalLine delay={0.3} />

              <div className="w-full max-w-4xl px-8">
                <HorizontalLine delay={0.35} />
              </div>

              <div className="grid grid-cols-6 gap-3 w-full max-w-4xl">
                {departments.map((dept, deptIndex) => (
                  <div key={dept.name} className="flex flex-col items-center">
                    <VerticalLine height="h-4" delay={0.4 + deptIndex * 0.05} />
                    <ChartNode
                      title={dept.name}
                      delay={0.45 + deptIndex * 0.05}
                      variant="secondary"
                    />
                    <VerticalLine height="h-3" delay={0.5 + deptIndex * 0.05} />

                    <div className="flex flex-col gap-1.5 mt-1">
                      {dept.teams.map((team, teamIndex) => (
                        <ChartNode
                          key={team}
                          title={team}
                          delay={0.55 + deptIndex * 0.05 + teamIndex * 0.03}
                          variant="department"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;
