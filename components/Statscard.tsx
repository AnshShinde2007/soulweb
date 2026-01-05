import CountUp from "@/components/CountUp";

type Props = {
  value: number;
  label: string;
  suffix?: string;
};

export default function StatCard({ value, label, suffix = "" }: Props) {
  return (
    <div className="text-center text-white">
      <div className="text-4xl font-medium">
        <CountUp to={value} duration={1} />
        {suffix}
      </div>
      <p className="mt-2 text-white/60">{label}</p>
    </div>
  );
}
