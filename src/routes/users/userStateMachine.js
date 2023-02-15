import { createMachine } from "xstate";
import { createContext } from "react";

export const UserMachineContext = createContext();

export const userMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QFdZgE4FkCGBjAFgJYB2YAdIRADZgDEu6Y2ALmANoAMAuoqAA4B7WIWaEBxXiAAeiAIwAWDmQDsADmUBWDhq2zZAZnn7VAGhABPRPuUAmMjY6q9q+QDZZy-QYC+3s6gwcAhJyShpaSBFOHiQQQWFRcUkZBAUlNU1tXQMjUwtEHX0yAE5i1WL5YptXLQ49X380LDwiUgpqOgA3QjAAd2jJeJExCViUtJV1LR06nOMzSwRbDXs9eXkNfX0NctUNBpAA5uC20l6AVSbabAgIAGFxUlxE4lgB2KGX5MRNVzJrVTVIwaWRlbQLKyaezWSqqQyyGylfQHI5BVrkM6XDC0TrYKiUFjsbiDITDJJjH4aP4AoHbUGqcH5BAOeRkDg2Wo2GzKDiKWQuFFNNEhMiYq4AIzwAGt3vxSV8KQhAaoyAzEdz9K4OJpNBDUlS2RyOOzuby6gK-IchS0RWcHsQni9YNdblj0ABJYgAMwEsri8pG3yW6lW1VcmXWynksj1+hsrOUriNHGKWp5sg4rkFgRtpz69sdI2duPxEEJfs+gcVei89mK+nrO25XOKsfjKiTtVT2rqmezx3RovzjzAzyLtEluBlxI+AfJoHGXKK1nD2xTcLq8ljKxsUw42wZGeqqn7wraJYJzAE6FojAAVqPmAA5AQAERY2Arc9GC7k-NkZDyGohjpuqGjKHqlQrMUUalDyXgaGU8inrm5AXmWV43vej4vgWj4jF+CRVr+qQGABiINgezaIrGUI2DCZTwoi9YoScaF4pe160LA2CdGAbqEWSP7SHIDjFIBtgpp4iaAh4epwvYe4Hr2x6sYOkTMG6EQQCIeFjuIbwznKRHziJSwGjSrjAvSjKLMooL-IisjgQoMFalmlqoqhZAaVp6HlkZ-omcJKS-P8ai0iCYIaHq7h-PZ8bFOBNj8jB+yedabE+TpmkStKgkKiRTjKGyGaeG5cbxq48lxv8vLORs+j7jsJ4ZTmWUaXpTraSI77MJ+gWVqZKROKynayFZKVUgYNixeGZD8rBXjslBHmNO16k5V147+awBXEWZNbkfWjaArYNFMpo4meJmqhWRUuytetA4ip1I76a8E75YN35BgiKUlHd5TxjyriqHd8lctCt33fIj1qSK3R9FpGn7cNkIldoFSbJ4d0aClsVRiomqRklmzGsibUveePQXFcSO9NtBloyFGNsohjW4zUBOXVCYNWfI3ITZU4YIzTyN5VOLNBkBSjuFJygwcU+6lFuTLhiVKUKI1B5lOlz1nmhtNM59qM-cFQZhZZ1nRXqibiQy0YaI1zXg2LRvDg6+EGTitN9QNMTGUJMvbBJWj1soisGOodscqs2ubLrezu2QDMm86k7ToHQXB4qLhFNyrhg9YZQZGrizlKyjsNeTB6tZaxACBAcCSF5bEkhbioALTVUyXf46GlSR7jFSVCnYRgB3uckYLerOyVVLshmcP4yrKdihgU+FWZ7gARsBhWXd2rgTFTLWABivqB4mjRsrNTr57hYGVvB0pBU4n4yCyyMZusZgyUGwXCC3ULyZQKddrXhfujVIDYlAIT2HsMGKUnB23WPHDwXJtQwSMCnXyTQoGswQFqACrgyj0QqlyNwc14pqARLYQwxgfBU0NtlXS70nQEKDElJQHgjBVFlmDCGl1EKOQRJUNY3JFbgNpm6ThiojRskUEXeeysGwVFjlXdkWC3CRwtAbbyad2FFjkSRKkfwHCuHPoidQ6hy4-FIf8Coag7pJnjDg3w3ggA */
  createMachine({
    id: "userMachine",
    initial: "idle",
    states: {
      idle: {
        on: {
          create: {
            target: "newUser",
          },
          edit: {
            target: "editUser",
          },
          view: {
            target: "viewUser",
          },
        },
      },
      newUser: {
        on: {
          addConnections: {
            target: "newConnections",
          },
          validate: {
            target: "validator",
          },
          back: {
            target: "idle",
          },
        },
      },
      newConnections: {
        on: {
          addUserInfo: {
            target: "newUser",
          },
          validate: {
            target: "validator",
          },
          back: {
            target: "idle",
          },
        },
      },
      validator: {
        on: {
          rejectNoData: {
            target: "newUser",
          },
          rejectNoConnection: {
            target: "newConnections",
          },
          saveUser: {
            target: "idle",
          },
        },
      },
      editUser: {
        on: {
          editConnections: {
            target: "editConnections",
          },
          validate: {
            target: "validator",
          },
          back: {
            target: "idle",
          },
        },
      },
      editConnections: {
        on: {
          editData: {
            target: "editUser",
          },
          validate: {
            target: "validator",
          },
          back: {
            target: "idle",
          },
        },
      },
      viewUser: {
        on: {
          edit: {
            target: "editUser",
          },
          viewConnections: {
            target: "viewConnections",
          },
          back: {
            target: "idle",
          },
        },
      },
      viewConnections: {
        on: {
          edit: {
            target: "editConnections",
          },
          viewData: {
            target: "viewUser",
          },
          back: {
            target: "idle",
          },
        },
      },
    },
  });
