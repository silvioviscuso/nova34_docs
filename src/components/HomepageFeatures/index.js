import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compact and Powerful',
    Svg: 'https://img.icons8.com/ios/452/processor.png', // New image for compact and powerful
    description: (
      <>
        The NOVA34 is an ultra-small Linux board 34x30x1mm featuring the NXP MIMX8MN5 processor, designed for embedded applications in space-constrained environments.
      </>
    ),
  },
  {
    title: 'Connectivity Out-of-the-Box',
    Svg: 'https://img.icons8.com/ios/452/wifi.png', // New image for connectivity
    description: (
      <>
        With built-in Wi-Fi and Bluetooth, and support for camera, display, and IMU sensors, the NOVA34 board is ideal for IoT and robotics projects.
      </>
    ),
  },
  {
    title: 'Customizable Linux Development',
    Svg: 'https://img.icons8.com/ios/452/linux.png', // New image for Linux development
    description: (
      <>
        Develop your applications with the custom Linux BSP, leverage cross-compilation, and use tools like MCUXpresso IDE to optimize performance for your needs.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
