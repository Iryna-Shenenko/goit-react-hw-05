import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>   
      
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      color="#194D33"
      borderColor="#101010"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    </div>
  )
}

export default Loader;