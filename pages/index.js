import axios from "axios";
import Link from "next/link";

export default function Home(props) {
  return (
    <div>
      <Link href="/abc/qwer">
        <a>Click here to go to Qwer</a>
      </Link>
    </div>
  );
}
