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
      injectRegister: 'script-defer',
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
            "purpose": "any"
        },
        {
            "src": "/folio/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
        }
        ],
        display: "standalone",
        orientation:"portrait",
        screenshots: [
          {
           "src": "/folio/ss1.png",
            "sizes": "2048x1536",
            "type": "image/png",
            "form_factor": "wide",
            "label": "Wider view of Portfolio of Software Developer based in India"
          },
          {
            "src": "/folio/ssm1.png",
            "type": "image/png",
            "sizes": "720x1600",
            "form_factor": "narrow",
            "label": "Narrower view of Portfolio of Software Developer based in India"
          },
      ]
      },
      workbox:{
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        globIgnores: [
          "node_modules/**/*"
        ],
        runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'StaleWhileRevalidate',
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