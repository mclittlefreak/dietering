module.exports = {
  "entry": {
    "app": {
      "import": [
        "@scripts/app",
        "@styles/app"
      ]
    },
    "editor": {
      "import": [
        "@scripts/editor",
        "@styles/editor"
      ]
    }
  },
  "bail": true,
  "cache": {
    "name": "bud.production",
    "type": "filesystem",
    "version": "ccpnbcgg_aybmy1tts7mhbvrahg_",
    "cacheDirectory": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/.budfiles/cache/webpack",
    "managedPaths": [
      "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/package.json",
        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/.yarnrc.yml",
        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/bud.config.js",
        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/composer.json",
        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/jsconfig.json",
        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/package-lock.json",
        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/tailwind.config.js",
        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/theme.json"
      ]
    }
  },
  "context": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering",
  "infrastructureLogging": {
    "console": {
      "Console": {}
    },
    "level": "none"
  },
  "mode": "production",
  "module": {
    "noParse": {},
    "rules": [
      {
        "test": {},
        "exclude": [
          {}
        ],
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources"
            ],
            "use": [
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/babel-loader/lib/index.js",
                "options": {
                  "cacheDirectory": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/.budfiles/cache/babel",
                  "presets": [
                    [
                      "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/@babel/preset-env/lib/index.js"
                    ],
                    [
                      "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/@babel/preset-react/lib/index.js"
                    ]
                  ],
                  "plugins": [
                    [
                      "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/@babel/plugin-transform-runtime/lib/index.js",
                      {
                        "helpers": false
                      }
                    ],
                    [
                      "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js"
                    ],
                    [
                      "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js"
                    ],
                    [
                      "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
                    ]
                  ],
                  "env": {
                    "development": {
                      "compact": false
                    }
                  },
                  "root": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering"
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources"
            ],
            "use": [
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "plugins": [
                      [
                        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/postcss-import/index.js"
                      ],
                      [
                        null
                      ],
                      [
                        null
                      ],
                      [
                        "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources"
            ],
            "use": [
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": false
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering"
            ],
            "exclude": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering"
            ],
            "exclude": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules"
            ],
            "use": [
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/js-yaml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering"
            ],
            "exclude": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules"
            ],
            "use": [
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/html-loader/dist/cjs.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering"
            ],
            "exclude": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules"
            ],
            "use": [
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/csv-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering"
            ],
            "exclude": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules"
            ],
            "use": [
              {
                "loader": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules/xml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering"
            ],
            "exclude": [
              "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/node_modules"
            ],
            "type": "json",
            "parser": {}
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name].[contenthash:6][ext]",
    "chunkFilename": "[name].[contenthash:6].js",
    "filename": "[name].[contenthash:6].js",
    "path": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/public",
    "pathinfo": false,
    "publicPath": "/wp-content/themes/dietering/public/"
  },
  "optimization": {
    "emitOnErrors": false,
    "minimize": true,
    "minimizer": [
      "...",
      {
        "options": {
          "test": {},
          "parallel": true,
          "minimizer": {
            "options": {
              "preset": [
                "default",
                {
                  "discardComments": {
                    "removeAll": true
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "runtimeChunk": "single",
    "splitChunks": {
      "cacheGroups": {
        "bud": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -10
        },
        "vendor": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -20
        }
      }
    }
  },
  "parallelism": 150,
  "performance": {
    "hints": false
  },
  "recordsPath": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/.budfiles/bud/modules.json",
  "stats": {
    "preset": "errors-warnings"
  },
  "target": "browserslist:/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/package.json",
  "plugins": [
    {
      "patterns": [
        {
          "from": "images",
          "to": "images/[name].[contenthash:6][ext]",
          "context": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources",
          "noErrorOnMissing": true
        }
      ],
      "options": {}
    },
    {
      "options": {
        "assetHookStage": null,
        "basePath": "",
        "fileName": "manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": true
      }
    },
    {
      "_sortedModulesCache": {},
      "options": {
        "filename": "[name].[contenthash:6].css",
        "ignoreOrder": false,
        "runtime": true,
        "chunkFilename": "[name].[contenthash:6].css"
      },
      "runtimeOptions": {
        "linkType": "text/css"
      }
    },
    {
      "options": {
        "enabled": true,
        "verbose": false,
        "extensions": {},
        "ignore": [],
        "remove": {}
      },
      "enabled": true,
      "verbose": false
    },
    {
      "options": {
        "emitHtml": false,
        "publicPath": ""
      },
      "plugin": {
        "name": "EntrypointsManifestPlugin",
        "stage": null
      },
      "name": "entrypoints.json"
    },
    {
      "name": "WordPressExternalsWebpackPlugin",
      "stage": null,
      "externals": {
        "type": "window"
      }
    },
    {
      "plugin": {
        "name": "WordPressDependenciesWebpackPlugin",
        "stage": null
      },
      "manifest": {},
      "usedDependencies": {},
      "fileName": "wordpress.json"
    },
    {
      "plugin": {
        "name": "MergedManifestPlugin"
      },
      "file": "entrypoints.json",
      "entrypointsName": "entrypoints.json",
      "wordpressName": "wordpress.json"
    }
  ],
  "resolve": {
    "alias": {
      "@src": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources",
      "@dist": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/public",
      "@fonts": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources/fonts",
      "@images": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources/images",
      "@scripts": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources/scripts",
      "@styles": "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources/styles"
    },
    "extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".wasm",
      ".yml",
      ".toml"
    ],
    "modules": [
      "/mnt/c/Users/mczek/Local Sites/dietering/app/public/wp-content/themes/dietering/resources",
      "node_modules"
    ]
  }
}