import Link from "next/link";

const Qwer = () => {
  //   const router = useRouter();
  //   const episodeData = router.query.object;
  //   if (episodeData && !Array.isArray(episodeData)) {
  //     return <PodcastPlayer episodeData={JSON.parse(episodeData)} />;
  //   }
  return (
    <div>
      <div>This is Qwer</div>
      <Link href="def">
        <a>Click here to go to def</a>
      </Link>
    </div>
  );
};

export default Qwer;
