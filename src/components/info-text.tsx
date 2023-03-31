type InfoTextProps = {
  value: string;
  keyText: string;
};

export function InfoText({ keyText, value }: InfoTextProps) {
  return (
    <div className="flex truncate">
      <dt className="font-semibold">{keyText}: &nbsp;</dt>
      <dd className="text-slate-700 dark:text-slate-400">{value}</dd>
    </div>
  );
}
