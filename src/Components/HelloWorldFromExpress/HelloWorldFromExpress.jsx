import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";
function HelloWorldFromExpress() {
  const [fetchMessage, setFetchMessage] = useState("");
  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch("/api/hello");
      const data = await response.text();
      setTimeout(() => {
        setFetchMessage(data);
        toast.dismiss();
        toast("Hello World from Express");
      }, 2000);
    };

    fetchMessage();
  }, []);
  return (
    <h1>
      {fetchMessage ? fetchMessage : <PropagateLoader color="#76ff17" />}{" "}
    </h1>
  );
}
export default HelloWorldFromExpress;
