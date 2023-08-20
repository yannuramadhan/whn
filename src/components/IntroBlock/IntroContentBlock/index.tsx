import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { IntroBlockProps } from "./types"
import { Fade } from "react-awesome-reveal";
import {
  IntroContentSection,
} from "./styles";

const IntroContentBlock = ({
  id,
}: IntroBlockProps) => {
  return (
    <IntroContentSection id={id}>
    </IntroContentSection>
  );
};

export default withTranslation()(IntroContentBlock);
