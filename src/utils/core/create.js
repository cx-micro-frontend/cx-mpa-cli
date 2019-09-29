import mixinsload from '../../mixins/index';
import reprefix from './reprefix';

export default function(sfc) {
  console.info(sfc);
  console.info(222222);


  Object.keys(sfc.components).forEach(comment => {
    console.log(comment);
    console.log(sfc.components[comment]);
    sfc.components[reprefix(comment)] = sfc.components[comment];
    delete sfc.components[comment];
  });


  console.info(sfc.components);


  sfc.mixins = sfc.mixins || [];
  sfc.mixins = [...sfc.mixins, ...mixinsload(sfc)];
  sfc.methods = sfc.methods || {};

  console.info(mixinsload(sfc));
  console.info(sfc);
  return sfc;
}
