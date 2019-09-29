import config from '../../config/index';
import { humpToLine } from '../../utils/library/stringcover';

export default name => {
  const n = name.replace(name[0], name[0].toLowerCase());

  return `${config.namespace}-${humpToLine(n)}`;
};


