var APP_DATA = {
  "scenes": [
    {
      "id": "0-the-reception",
      "name": "THE RECEPTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.5788081703042458,
        "pitch": 0.10005806203150769,
        "fov": 1.3237681912121593
      },
      "linkHotspots": [
        {
          "yaw": -1.167379317327093,
          "pitch": 0.1005196106142634,
          "rotation": 0,
          "target": "1-dental-room-sample"
        },
        {
          "yaw": -0.35462447425862464,
          "pitch": 0.03088715526584096,
          "rotation": 0,
          "target": "2-internal-medicine"
        },
        {
          "yaw": -0.5307271133407916,
          "pitch": 0.035105585224542324,
          "rotation": 0,
          "target": "4-obs-and-gyn"
        },
        {
          "yaw": 0.6709381902195375,
          "pitch": 0.13613942348909092,
          "rotation": 1.5707963267948966,
          "target": "5-opd-clinic"
        },
        {
          "yaw": 0.39049972496589724,
          "pitch": 0.040803665335078065,
          "rotation": 1.5707963267948966,
          "target": "3-lap"
        },
        {
          "yaw": 0.6876802314140793,
          "pitch": -0.35538743710290355,
          "rotation": 0,
          "target": "7-pediatric-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dental-room-sample",
      "name": "DENTAL ROOM SAMPLE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8129458654070962,
          "pitch": 0.11010421804212278,
          "rotation": 0,
          "target": "0-the-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-internal-medicine",
      "name": "INTERNAL MEDICINE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4883793954747446,
          "pitch": 0.3592465474257729,
          "rotation": 0,
          "target": "0-the-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lap",
      "name": "LAP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1100300484846315,
          "pitch": 0.3115292282511888,
          "rotation": 0,
          "target": "0-the-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-obs-and-gyn",
      "name": "OBS AND GYN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2393487453343086,
          "pitch": 0.17256943731768004,
          "rotation": 0,
          "target": "0-the-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-opd-clinic",
      "name": "OPD CLINIC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-ecg",
      "name": "ECG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2332039565484916,
          "pitch": 0.28707382247588065,
          "rotation": 0,
          "target": "0-the-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pediatric-",
      "name": "PEDIATRIC ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7073100909023964,
          "pitch": 0.07616629378145667,
          "rotation": 0,
          "target": "0-the-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-training-reception",
      "name": "TRAINING RECEPTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-reception-2",
      "name": "RECEPTION 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5885363190825394,
          "pitch": 0.1651866634680701,
          "rotation": 0,
          "target": "11-inside-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-training-entrance",
      "name": "TRAINING ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.877426028710426,
          "pitch": 0.02675581088572976,
          "rotation": 0,
          "target": "8-training-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-inside-reception",
      "name": "INSIDE RECEPTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1544385915640802,
          "pitch": -0.1520890900364087,
          "rotation": 0,
          "target": "9-reception-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MU COMPLEX 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
