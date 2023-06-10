import { useEffect } from "react"


const useTitle = title => {

    useEffect(() => {
        document.title = `${title}-SmartKiddo`;
    }, [title])
}

export default useTitle; 