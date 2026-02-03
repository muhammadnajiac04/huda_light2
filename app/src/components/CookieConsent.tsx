import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleCookieSettings = () => {
    setShowSettings(true);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookie-consent', 'custom');
    setShowSettings(false);
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl"
          >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex-1 max-w-3xl">
                  <h3 className="text-astro-dark text-lg font-medium mb-2">
                    Cookie Consent
                  </h3>
                  <p className="text-astro-gray text-sm leading-relaxed">
                    By clicking 'Accept all Cookies' you agree to us using information about how you interact with our website to improve and personalise your browsing experience. This information may also be used for advertising purposes on this website and third party platforms. Click on "Cookie Settings" below to manage your preferences. More information can be found on our{' '}
                    <a 
                      href="/privacy/cookies" 
                      className="underline hover:text-astro-dark transition-colors"
                    >
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={handleCookieSettings}
                    className="px-6 py-3 border border-astro-dark text-astro-dark text-sm font-medium hover:bg-astro-dark hover:text-white transition-colors"
                  >
                    Cookie Settings
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-3 bg-astro-dark text-white text-sm font-medium hover:bg-astro-dark/90 transition-colors"
                  >
                    Accept All Cookies
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-astro-dark text-xl font-medium">
              Cookie Settings
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-astro-dark font-medium mb-1">Necessary Cookies</h4>
                <p className="text-astro-gray text-sm">
                  These cookies are essential for the website to function properly.
                </p>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked 
                  disabled 
                  className="w-5 h-5 accent-astro-dark"
                />
              </div>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-astro-dark font-medium mb-1">Analytics Cookies</h4>
                <p className="text-astro-gray text-sm">
                  Help us improve our website by collecting anonymous usage data.
                </p>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 accent-astro-dark"
                />
              </div>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-astro-dark font-medium mb-1">Marketing Cookies</h4>
                <p className="text-astro-gray text-sm">
                  Used to deliver personalized advertisements.
                </p>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 accent-astro-dark"
                />
              </div>
            </div>
            <div className="pt-4 border-t">
              <button
                onClick={handleSaveSettings}
                className="w-full px-6 py-3 bg-astro-dark text-white text-sm font-medium hover:bg-astro-dark/90 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
