import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div3 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex12Cb, useFlex13Cb, useFlex15Cb, useFlex16Cb, useDiv23Cb, useFlex17Cb, useFlex19Cb, useFlex20Cb, useDiv28Cb, useFlex22Cb, useImage17Cb, useTextBox37Cb, useImage20Cb, useTextBox41Cb, useImage21Cb, useTextBox42Cb, useImage22Cb, useTextBox43Cb, useTextBox48Cb, useTextBox49Cb, useTextBox50Cb, useButton13Cb, useButton14Cb } from "../page-cbs/main seticon";
import "../page-css/main seticon.css";
import "../custom/main seticon";

export default function MainSeticon() {
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

  const Flex12Props = useStore((state)=>state["main seticon"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["main seticon"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex13Props = useStore((state)=>state["main seticon"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["main seticon"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex15Props = useStore((state)=>state["main seticon"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["main seticon"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex16Props = useStore((state)=>state["main seticon"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["main seticon"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Div23Props = useStore((state)=>state["main seticon"]["Div23"]);
const Div23IoProps = useIoStore((state)=>state["main seticon"]["Div23"]);
const Div23Cb = useDiv23Cb()
const Flex17Props = useStore((state)=>state["main seticon"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["main seticon"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex19Props = useStore((state)=>state["main seticon"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["main seticon"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["main seticon"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["main seticon"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Div28Props = useStore((state)=>state["main seticon"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["main seticon"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Flex22Props = useStore((state)=>state["main seticon"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["main seticon"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Image17Props = useStore((state)=>state["main seticon"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["main seticon"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox37Props = useStore((state)=>state["main seticon"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["main seticon"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Image20Props = useStore((state)=>state["main seticon"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["main seticon"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox41Props = useStore((state)=>state["main seticon"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["main seticon"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image21Props = useStore((state)=>state["main seticon"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["main seticon"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox42Props = useStore((state)=>state["main seticon"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["main seticon"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image22Props = useStore((state)=>state["main seticon"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["main seticon"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox43Props = useStore((state)=>state["main seticon"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["main seticon"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox48Props = useStore((state)=>state["main seticon"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["main seticon"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["main seticon"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["main seticon"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["main seticon"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["main seticon"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Button13Props = useStore((state)=>state["main seticon"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["main seticon"]["Button13"]);
const Button13Cb = useButton13Cb()
const Button14Props = useStore((state)=>state["main seticon"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["main seticon"]["Button14"]);
const Button14Cb = useButton14Cb()

  return (<>
  <Flex3 className="p-main seticon Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Flex3 className="p-main seticon Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Flex3 className="p-main seticon Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Flex3 className="p-main seticon Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Div3 className="p-main seticon Div23 bpt" {...Div23Props} {...Div23Cb} {...Div23IoProps}>
<TextBox3 className="p-main seticon TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<Flex3 className="p-main seticon Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Image3 className="p-main seticon Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox3 className="p-main seticon TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex3>
<Flex3 className="p-main seticon Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Image3 className="p-main seticon Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox3 className="p-main seticon TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Flex3>
<Flex3 className="p-main seticon Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Image3 className="p-main seticon Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox3 className="p-main seticon TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Flex3>
</Div3>
</Flex3>
<Image3 className="p-main seticon Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex3>
</Flex3>
<Div3 className="p-main seticon Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<TextBox3 className="p-main seticon TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox3 className="p-main seticon TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox3 className="p-main seticon TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<Flex3 className="p-main seticon Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Button2 className="p-main seticon Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
<Button2 className="p-main seticon Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
</Flex3>
</Div3>
</Flex3>
  </>);
}
