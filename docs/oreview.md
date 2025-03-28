## 📏 Dimensions
- **Width:** 34mm  
- **Height:** 30.946mm  
- **Thickness:** 1mm  

## 🛠️ Technical Specifications
### Primary Components
#### **Back Side**
- **Processor:** NXP MIMX8MN5DVPIZAA (I.MX 8M NANO - ULTRALIGHT)
- **Power Management IC (PMIC):** NXP PCA9450BHNY
- **Antenna:** M310220 Kyocera Avx
- **RF Switch:** ADG824BCPZ-REEL7 (For Antenna Diversity)
- **Camera:** Minimum 1MP or 2MP, 16/24Pins, around 100° FOV
- **Power & Serial Connector:** JST B4B-ZR-SM4-TF (1.5mm, 1 Row, 4 Contacts)
- **USB Pads:** For SDM (Serial Download Mode for firmware flashing)
- **Audio:** Speaker Pads and External Speaker
- **Wi-Fi/Bluetooth Combo Chip:**
  - Rev_1.0 to Rev_1.3: Realtek RTL8723DS (Wi-Fi + Bluetooth)
  - Final Revision: CYW43012 - 106-ball WLBGA (3.76 x 4.43mm; 0.35mm pitch)
- **Storage:** Kingston 32EP16-M4FTC32-GA68 (eMMC 5.1 HS400 + LPDDR4X 144-FBGA)

#### **Front Side**
- **IMU Sensor:** Bosch BMI160
- **Display:** ST0103A2W-WSNLW-F
- **Buffer:** NC7SP125P5X
- **DAC:** MAX98357AETE+T

## 🔧 Design and PCB Progress
- **Revisions Rev_1.0 to Rev_1.3:** Electrical schematic and PCB design contained errors requiring corrections.
- **Final Revision:** 100% complete and accurate schematic, no further modifications required.

### **Status**
- **Schematic:** ██████████ 100% (Complete)
- **PCB:** ███░░░░░░░░ 30% (In Progress)

## 📋 Component List & Costs
| Component           | Part Number                          | Price (€)  |
|--------------------|---------------------------------|------------|
| **Processor**      | MIMX8MN5DVPIZAA (NXP)            | 24.29      |
| **Memory ePOP**    | 32EP16-M4FTC32-GA68 (KINGSTON)   | 25.35      |
| **Connector**      | B4B-ZR-SM4-TF (JST)              | 0.66       |
| **PMIC**          | PCA9450BHNY (NXP)               | 4.11       |
| **IMU**           | BMI160 (BOSCH)                  | 1.46       |
| **WiFi/Bluetooth** | CYW43012TC0KFFBH (Infineon)     | 10.00      |
| **Antenna**       | M310220 (KYOCERA AVX)           | 0.91       |
| **Display**       | ST0103A2W-WSNLW-F (SANTEK)      | 31.84      |
| **DAC**           | MAX98357AETE+T (ANALOG DEVICE)  | 4.50       |
| **Speaker**       | RS PRO 8Ω 0.5W Mini Speaker     | 15.00      |
| **RF SWITCH**     | ADG824BCPZ-REEL7 (ANALOG)       | 3.00       |
| **Buffer**        | NC7SP125P5X (Onsemi Fairchild)  | 0.70       |
| **Camera**        | MIPI Camera Module – MCM5M120M6F1 (IADY) | 15.00 (USD) |
| **PCB + Stencil** | JLPCB                            | 120-150    |
| **Estimated Total** | - | ~261-291 € + 15 USD |

---
## 🔄 Firmware & Software Development
- **Bootloader & OS:** Custom Linux build optimized for ultra-small form factor.
- **SDK & Drivers:** Support for Wi-Fi, Bluetooth, IMU, and Display drivers.
- **Flashing & Debugging:** Via USB Serial Download Mode (SDM) pads.

### 🛠️ Tools for Developing Applications
- Cross-compilation with GCC & Clang
- Yocto Project for custom Linux image
- OpenOCD for debugging
- **MCUXpresso IDE** is NXP’s powerful integrated development environment for creating, debugging, and optimizing applications for NXP microcontrollers and processors. It offers a wide range of tools and features for efficient software development.

#### Getting Started with MCUXpresso IDE:

##### Download and Install:
- Visit the [MCUXpresso IDE Download Page](https://www.nxp.com/support/developer-resources/software-development-tools/mcuxpresso-software-and-tools/mcuxpresso-ide:MCUXpresso-IDE) to download the IDE for your platform (Windows/macOS/Linux).
- Follow the installation instructions on the website.

---

## 📖 Getting Started Guide

1. **Powering the Board:**  
   You can power the board using one of the following methods:
   - **JST B4B-ZR-SM4-TF Connector:** Connect 3.3V to this connector for power.
   - **Power Pads:** Alternatively, you can power the board through the designated **power pads** available on the board.

2. **Flashing Firmware:**  
   Use USB SDM pads to upload firmware via NXP U-Boot.

3. **Connecting Peripherals:**
   - Camera via MIPI CSI interface
   - Display via onboard ST0103A2W-WSNLW-F
   - Wi-Fi & Bluetooth enabled by default

4. **Developing Applications:**
   - Use **Linux BSP** and cross-compile applications.
   - Deploy software via **SSH** or **serial connection**.

---

---

## 🏗️ Future Roadmap
- **Rev_1.4 PCB Completion:** Finalizing design adjustments.
- **Firmware Optimization:** Enhancing power efficiency and boot times.
- **Community Contributions:** Open-sourcing schematics and SDK.
- **Production & Testing:** Scaling manufacturing for public release.

---

## 📞 Contact & Community
- **GitHub Repo:** [NOVA34 Repository](https://github.com/silvioviscuso/nova34)