import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useDiv18Cb, useFlex8Cb, useDiv21Cb, useImage16Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useButton10Cb, useButton11Cb } from "../page-cbs/Section";
import "../page-css/Section.css";
import "../custom/Section";

export default function Section() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div18Props = useStore((state)=>state["Section"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Section"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Flex8Props = useStore((state)=>state["Section"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Section"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Div21Props = useStore((state)=>state["Section"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Section"]["Div21"]);
const Div21Cb = useDiv21Cb()
const Image16Props = useStore((state)=>state["Section"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Section"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox33Props = useStore((state)=>state["Section"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Section"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Section"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Section"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Section"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Section"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Button10Props = useStore((state)=>state["Section"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Section"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button11Props = useStore((state)=>state["Section"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Section"]["Button11"]);
const Button11Cb = useButton11Cb()

  return (<>
  <Div2 className="p-Section Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<Flex2 className="p-Section Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Image2 className="p-Section Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<Div2 className="p-Section Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}>
<TextBox2 className="p-Section TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox2 className="p-Section TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox2 className="p-Section TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<Button1 className="p-Section Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
<Button1 className="p-Section Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Div2>
</Flex2>
</Div2>
  </>);
}
