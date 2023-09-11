


interface ButtonType{
  btnType:string,
  children:string,
  mode:string,
  className?:string,
}

const button = ({ btnType, children, mode, className, ...props }:ButtonType) => {

  switch (btnType) {
    case 'circular': {
      return (
        <button className={`border-2 ${mode=="dark"?"border-primary  hover:bg-primary hover:text-white":"border-white bg-primary hover:text-primary hover:bg-white"} rounded-full inline-block font-semibold   px-4 py-2`} {...props} >
          {children}

        </button>

      );
    }


    default: {
      return (
        <button className={`border-2 ${mode=="dark"?"border-primary  hover:bg-primary hover:text-white":"border-white bg-primary hover:text-primary hover:bg-white"} rounded-md inline-block font-semibold   px-4 py-2`} {...props} >
          {children}

        </button>

      );
    }
  }
}





export default button


