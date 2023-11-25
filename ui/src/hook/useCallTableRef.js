import { useEffect, useRef } from "react";

function useCallTableRef() {
  const dataTableRef = useRef(null);

  useEffect(() => {
    if (dataTableRef.current) {
      new window.simpleDatatables.DataTable(dataTableRef.current);
    }
  }, []);
}

export default useCallTableRef;
