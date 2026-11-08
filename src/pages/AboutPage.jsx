import MeetTherapist from "../sections/MeetTherapist";
import Philosophy from "../sections/Philosophy";
import Process from "../sections/Process";

export default function AboutPage() {
  return (
    <>
      <div className="header-spacer"></div>
      <MeetTherapist />
      <Philosophy />
      <Process />
    </>
  );
}
