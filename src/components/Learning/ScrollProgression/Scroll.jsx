import { motion, useScroll, useSpring, useTransform } from "framer-motion";
export const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(123,123, 98)", "rgb(255, 34, 88 )"],
  );
  return (
    <div>
      <motion.div
        className={"sticky h-4 bg-amber-500 top-0 origin-left w-full"}
        style={{
          scaleX,
          background,
        }}
      ></motion.div>
      <p className={"p-8 max-w-3xl mx-auto"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat
        diam id dui vestibulum dapibus. Morbi interdum hendrerit nunc eu
        volutpat. Donec in cursus ante. Phasellus placerat, arcu quis rhoncus
        volutpat, orci quam rutrum nibh, nec venenatis est urna a diam. Quisque
        sagittis fringilla posuere. Aliquam lacinia pellentesque sem nec
        sollicitudin. Donec sed malesuada diam. Nunc in luctus augue. Quisque
        non augue elit. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Aliquam iaculis nulla ac est scelerisque
        facilisis. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Maecenas aliquam velit id nunc mollis
        egestas. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Vestibulum sodales fringilla lorem. Morbi et
        eros enim. Nulla urna est, aliquet vitae eros in, sollicitudin finibus
        purus. Donec eleifend sapien tristique neque fringilla facilisis. In
        orci massa, consequat ac ipsum eu, feugiat laoreet lacus. Nulla non
        porta justo, a auctor ligula. Donec eget consequat orci. Nam dolor
        libero, condimentum quis neque vel, dignissim viverra quam. Donec ut leo
        leo. Morbi et est congue, scelerisque lacus nec, porta risus. Fusce nec
        enim diam. Suspendisse auctor, lorem semper sodales sollicitudin, orci
        ligula consectetur neque, quis dictum massa orci vel leo. Donec sit amet
        consectetur libero. Suspendisse nec euismod mi, quis pretium sapien.
        Nunc id scelerisque ipsum. Morbi magna mi, vestibulum sed dignissim et,
        congue in lorem. Integer sodales vitae enim elementum accumsan. Quisque
        viverra sed arcu et lobortis. In mattis mollis massa id semper. Etiam
        vulputate enim quam, et facilisis magna interdum ac. In sed interdum
        erat, ac commodo purus. Aliquam a tincidunt mauris. Aenean pellentesque
        tempor nisl, sit amet pellentesque nisi auctor a. Nam vitae tincidunt
        turpis. Pellentesque eleifend vehicula magna, in ultrices magna porta
        et. Aliquam ut risus velit. Aliquam ultrices lorem nisi, in fringilla
        elit ultrices nec. Maecenas ut mi pretium justo euismod pretium. Nam
        posuere velit in mauris condimentum varius. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Suspendisse bibendum quam ut ante vestibulum auctor. Donec in quam
        congue ligula semper fringilla. Nam aliquam lacus at ultrices vehicula.
        Donec ex velit, vestibulum id molestie at, bibendum quis velit. Donec
        dictum vestibulum sollicitudin. Phasellus sapien elit, placerat et
        vehicula et, efficitur vitae nisi. Nam lorem leo, ornare quis tristique
        non, aliquam id leo. Ut at consectetur nibh. Vivamus ornare arcu arcu,
        sed mattis orci tincidunt et. Curabitur sollicitudin risus a diam
        consectetur, in tempor felis ullamcorper. Phasellus pharetra lacus eget
        enim euismod bibendum. Sed vulputate neque vitae mauris porttitor
        placerat. Suspendisse ac quam a ante iaculis placerat at a orci. Donec
        ut ex convallis, scelerisque velit non, hendrerit mi. Nullam non mauris
        tempus, suscipit arcu aliquam, volutpat nisi. Sed nec orci eu arcu
        tincidunt pellentesque id eget sapien. Nam quis nulla viverra, suscipit
        nisi vitae, tempus tellus. In vehicula nec mi a consequat. Nulla
        facilisi. Nam mauris dolor, pharetra nec elementum eu, ullamcorper eu
        urna. Nam eleifend euismod congue. Ut at eros ut ante dapibus ultrices.
        Mauris maximus tristique dolor, vitae venenatis lorem congue vitae.
        Suspendisse pretium eget neque sit amet eleifend. Etiam ex ex, congue ac
        pretium sed, sodales a leo. Ut dignissim feugiat nisi, vel tristique
        tellus cursus eu. Quisque vel laoreet odio, vitae lobortis enim. Morbi
        auctor mollis lorem eget rhoncus. Phasellus eu auctor neque, eget semper
        odio. Nulla quis eros placerat, euismod purus ut, condimentum velit. Sed
        vel egestas libero, et ultricies magna. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Aenean
        feugiat leo est, vel mattis velit sagittis id. Nunc at laoreet odio.
        Morbi porttitor nibh blandit diam maximus varius. Sed pretium dignissim
        urna, sit amet hendrerit risus condimentum eu. Maecenas vel sagittis
        eros. Proin sodales ligula vitae augue venenatis, sit amet vulputate
        ipsum egestas. Aliquam placerat rutrum tempus. Mauris bibendum nibh
        metus, eget viverra ex aliquam sed. Nunc volutpat augue sit amet purus
        gravida, sed facilisis purus auctor. Integer eget turpis porttitor,
        feugiat odio sed, vestibulum lorem. Nam non diam tortor. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Proin vel rhoncus ex, vel pharetra metus. Quisque nec metus
        lacinia, iaculis nibh nec, fermentum ligula. Phasellus porta arcu metus,
        sit amet mattis ex suscipit id. Nam pulvinar, velit id lacinia rutrum,
        tellus nisl tempus velit, a fringilla diam ligula id lectus. Cras
        fermentum libero eget nisi placerat, a tincidunt magna porta. Proin
        luctus rutrum nunc nec rhoncus. Pellentesque ut ex massa. Vivamus
        posuere elit quis vehicula imperdiet. Donec nec nisi maximus, mollis
        orci eu, blandit nisi. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Etiam sit amet vestibulum
        sem, sit amet finibus purus. Aliquam imperdiet dapibus venenatis. Nullam
        et justo sodales, pharetra erat quis, sollicitudin nunc. Proin tincidunt
        ut augue sed suscipit. Donec convallis nibh non leo ornare, id gravida
        augue commodo. Nam velit quam, aliquet pellentesque sapien vitae,
        vehicula ultrices nulla. Quisque at pretium risus, eu facilisis sapien.
        Mauris sodales lectus at tortor bibendum, in vestibulum enim gravida.
        Aenean accumsan, mi ut ullamcorper elementum, massa risus sodales leo,
        id convallis quam lectus eget arcu. Cras odio lacus, eleifend et varius
        quis, tincidunt ac massa. Fusce ornare ex velit, eu consequat tellus
        finibus ac. Nunc sed dictum felis. Cras bibendum sed risus nec pulvinar.
        Duis nec congue augue, blandit pulvinar enim. Donec varius cursus ex
        eget consectetur. Etiam egestas sem ut tortor blandit facilisis. Morbi
        vehicula neque tempus, porttitor nisi vitae, condimentum eros. Proin
        dapibus vitae ligula vel laoreet. Proin tempus congue vestibulum. Nunc
        tincidunt fermentum pretium. Maecenas porta at turpis ut finibus.
        Suspendisse hendrerit libero ut suscipit mattis. Integer sit amet auctor
        turpis. Curabitur ex tellus, commodo non semper id, vulputate sed massa.
        Nullam eget urna dui. Aenean quis fringilla nunc. Nullam quis purus nec
        orci scelerisque lobortis. Cras ultrices tempor est, sed iaculis lectus
        egestas et.
      </p>
    </div>
  );
};
