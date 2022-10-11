import React from "react";
import { Disclosure } from "@headlessui/react";
import { cx, ChevronUpIcon, Icon } from "@vechaiui/react";

const Shopbycategories = () => {
  return (
    <div className="lg:w-[17.5rem] border-separate border-spacing-4 border">
      <div className="bg-accent/20">
        <tr>
          <th className="font-[100] text-[16px]">Shop By Categories</th>
        </tr>
      </div>
      <div className="flex">
        <div className="w-full">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base hover:bg-neutral-100 dark:hover:bg-blackAlpha-50 focus:outline-none">
                  <span className="text-[14px]">Digital Watch</span>
                  <span
                    className={cx(
                      "w-5 h-5 rounded-full flex justify-center items-center text-primary-500 dark:text-primary-600",
                      open
                        ? "bg-primary-50 dark:bg-primary-200 dark:bg-opacity-15"
                        : "bg-transparent"
                    )}
                  >
                    <Icon
                      as={ChevronUpIcon}
                      label="chevron-up"
                      className={cx(
                        "w-4 h-4",
                        open ? "transform rotate-180" : ""
                      )}
                    />
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-8 pt-1 pb-2 leading-8 text-sm text-muted">
                  <p>Self-Winding</p>
                  <p>Suunto Core</p>
                  <p>Tissot T-Touch</p>
                  <p>G-SHOCK GA</p>
                  <p>Garmin Fenix X</p>
                  <p>Timex Expedition</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base hover:bg-neutral-100 dark:hover:bg-blackAlpha-50 focus:outline-none">
                  <span className="text-[14px]">Quartz Watch</span>
                  <span
                    className={cx(
                      "w-5 h-5 rounded-full flex justify-center items-center text-primary-500 dark:text-primary-600",
                      open
                        ? "bg-primary-50 dark:bg-primary-200 dark:bg-opacity-15"
                        : "bg-transparent"
                    )}
                  >
                    <Icon
                      as={ChevronUpIcon}
                      icon="chevron-up"
                      className={cx(
                        "w-4 h-4",
                        open ? "transform rotate-180" : ""
                      )}
                    />
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-8 pt-1 pb-2 leading-8 text-sm text-muted">
                  <p>Braun BN0035</p>
                  <p>Timex Waterbury</p>
                  <p>Tissot PRC200</p>
                  <p>Longines Conquest</p>
                  <p>Citizen Nighthawk</p>
                  <p>Sinn UX</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 rounded-base cursor-base hover:bg-neutral-100 dark:hover:bg-blackAlpha-50 focus:outline-none">
                  <span className="text-[14px]">Solar Watch</span>
                  <span
                    className={cx(
                      "w-5 h-5 rounded-full flex justify-center items-center text-primary-500 dark:text-primary-600",
                      open
                        ? "bg-primary-50 dark:bg-primary-200 dark:bg-opacity-15"
                        : "bg-transparent"
                    )}
                  >
                    <Icon
                      as={ChevronUpIcon}
                      icon="chevron-up"
                      className={cx(
                        "w-4 h-4",
                        open ? "transform rotate-180" : ""
                      )}
                    />
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-8  pt-1 pb-2 leading-8 text-sm text-muted">
                  <p>Fossil</p>
                  <p>Citizen</p>
                  <p>Casio</p>
                  <p>Timex</p>
                  <p>Titan</p>
                  <p>Michael Kors</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Shopbycategories;
