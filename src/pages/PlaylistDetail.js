import { useParams } from "react-router-dom";

const PlaylistDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>test - {id}</h2>
    </div>
  );
};

export default PlaylistDetail;
