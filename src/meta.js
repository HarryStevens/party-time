import json from "./data/parties.json"
import {version} from "../package.json";

export default {
  parties_count: json.length,
  version: version,
  last_updated: "May 23, 2019"
}