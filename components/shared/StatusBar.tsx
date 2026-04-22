import { MI } from "./MI";

export function StatusBar() {
  return (
    <div className="cd-status">
      <span>9:41</span>
      <div className="cd-status-r">
        <MI name="network_cell" size={15} />
        <MI name="wifi" size={15} />
        <MI name="battery_full" size={16} />
      </div>
    </div>
  );
}
