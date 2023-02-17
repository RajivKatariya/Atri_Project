import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useDiv13Cb, useCardCb, useDiv14Cb, useDiv15Cb, useDiv16Cb, useDiv17Cb, useTextBox21Cb, useImage8Cb, useTextBox22Cb, useTextBox23Cb, useLink15Cb, useImage9Cb, useTextBox24Cb, useTextBox25Cb, useLink16Cb, useImage10Cb, useTextBox26Cb, useTextBox27Cb, useLink17Cb, useImage11Cb, useTextBox28Cb, useTextBox29Cb, useLink18Cb } from "../page-cbs/Browse";
import "../page-css/Browse.css";
import "../custom/Browse";

export default function Browse() {
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

  const Div13Props = useStore((state)=>state["Browse"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Browse"]["Div13"]);
const Div13Cb = useDiv13Cb()
const CardProps = useStore((state)=>state["Browse"]["Card"]);
const CardIoProps = useIoStore((state)=>state["Browse"]["Card"]);
const CardCb = useCardCb()
const Div14Props = useStore((state)=>state["Browse"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Browse"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Div15Props = useStore((state)=>state["Browse"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Browse"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div16Props = useStore((state)=>state["Browse"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Browse"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Div17Props = useStore((state)=>state["Browse"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Browse"]["Div17"]);
const Div17Cb = useDiv17Cb()
const TextBox21Props = useStore((state)=>state["Browse"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Browse"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Image8Props = useStore((state)=>state["Browse"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Browse"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox22Props = useStore((state)=>state["Browse"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Browse"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Browse"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Browse"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Link15Props = useStore((state)=>state["Browse"]["Link15"]);
const Link15IoProps = useIoStore((state)=>state["Browse"]["Link15"]);
const Link15Cb = useLink15Cb()
const Image9Props = useStore((state)=>state["Browse"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Browse"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox24Props = useStore((state)=>state["Browse"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Browse"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Browse"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Browse"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Link16Props = useStore((state)=>state["Browse"]["Link16"]);
const Link16IoProps = useIoStore((state)=>state["Browse"]["Link16"]);
const Link16Cb = useLink16Cb()
const Image10Props = useStore((state)=>state["Browse"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Browse"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox26Props = useStore((state)=>state["Browse"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Browse"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Browse"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Browse"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Link17Props = useStore((state)=>state["Browse"]["Link17"]);
const Link17IoProps = useIoStore((state)=>state["Browse"]["Link17"]);
const Link17Cb = useLink17Cb()
const Image11Props = useStore((state)=>state["Browse"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Browse"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox28Props = useStore((state)=>state["Browse"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Browse"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Browse"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Browse"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Link18Props = useStore((state)=>state["Browse"]["Link18"]);
const Link18IoProps = useIoStore((state)=>state["Browse"]["Link18"]);
const Link18Cb = useLink18Cb()

  return (<>
  <Div1 className="p-Browse Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox1 className="p-Browse TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<Flex1 className="p-Browse Card bpt" {...CardProps} {...CardCb} {...CardIoProps}>
<Div1 className="p-Browse Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<Image1 className="p-Browse Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox1 className="p-Browse TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox1 className="p-Browse TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<Link1 className="p-Browse Link15 bpt" {...Link15Props} {...Link15Cb} {...Link15IoProps}/>
</Div1>
<Div1 className="p-Browse Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Image1 className="p-Browse Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox1 className="p-Browse TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<TextBox1 className="p-Browse TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<Link1 className="p-Browse Link16 bpt" {...Link16Props} {...Link16Cb} {...Link16IoProps}/>
</Div1>
<Div1 className="p-Browse Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Image1 className="p-Browse Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox1 className="p-Browse TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox1 className="p-Browse TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<Link1 className="p-Browse Link17 bpt" {...Link17Props} {...Link17Cb} {...Link17IoProps}/>
</Div1>
<Div1 className="p-Browse Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Image1 className="p-Browse Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<TextBox1 className="p-Browse TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox1 className="p-Browse TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<Link1 className="p-Browse Link18 bpt" {...Link18Props} {...Link18Cb} {...Link18IoProps}/>
</Div1>
</Flex1>
</Div1>
  </>);
}
