import type React from "react";
import { useEffect, useLayoutEffect } from "react";
import { useAuthStore } from "../stores/BlazeStores/authStore";
import { recursiveArrayFunctionExec } from "./utils/recursiveArrayFunctionExec";
import blazeCentralConfiguration from "../blazeCentralConfiguration";
import { useNavigate } from "react-router";

export type BlazeAuthentificationLayerPropsType = {
  children?: React.ReactNode;
  protection?: boolean
  middlewares?: BlazeMiddleware[];
  Loading: () => React.ReactNode;
};

export type BlazeMiddleware = (res: unknown|null) => unknown|null;

export function BlazeAuthentificationLayer(
  props: BlazeAuthentificationLayerPropsType
) {
  const { protection, children, middlewares, Loading } = props;
  if(!protection){
    return children
  }
  const navigate = useNavigate();
  const {setUserInformations, userInformations} = useAuthStore(_=>_);
  useLayoutEffect(()=>{
    authenticate().then((res)=>{
        if(middlewares){
            const valueAfterMiddleWares = recursiveArrayFunctionExec(middlewares, res, 0);
            return valueAfterMiddleWares;
        }
        return res;
    }).then((result)=>{
      if(!result){
        navigate("/forbidden")
        return result;
      }
      return result;
    }).then(setUserInformations)
  }, [])


  return userInformations ? children : <Loading />;
}

function authenticate() {
  return blazeCentralConfiguration.blazeAuthProvider.authentificationProvider.whoami(
    blazeCentralConfiguration.blazeAuthProvider.authentificationPath
  ).then(res=>res).catch(()=>null) ;
}

