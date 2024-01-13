import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
       autoprefixer({}) // add options if needed
      ],
    },
  },
  plugins:[ VitePWA({
      registerType:'autoUpdate',
      manifest: {
        name: 'Deepanshu',
        short_name: 'DM',
        description: 'Software developer based in India',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [{
            "src": "/folio/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
        },
        {
            "src": "/folio/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
        }
        ],
        display: "standalone",
        orientation:"portrait"
      },
          workbox:{
            globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
            globIgnores: [
              "node_modules/**/*"
            ],
            runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'gstatic-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 
          },
          cacheableResponse: {
            statuses: [0, 200]
          },
        }
      }
    ]
          },
          devOptions:{
            enabled: true
          },

        }
        
        ),
      ],
      
  base: '/folio/'
});