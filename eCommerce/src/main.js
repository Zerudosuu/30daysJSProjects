import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/head.css";
import "../styles/components/hero.css";
import "../styles/components/product.css";
import "../styles/components/divider.css";
import "../styles/components/highlight.css";
import "../styles/components/giftsection.css";
import "../styles/components/footer.css";

import "../styles/utils.css";

import fetchingData from "./utils/gettingData";
import AOS from "./utils/AOS";

fetchingData();
AOS();
