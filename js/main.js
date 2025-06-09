/* =================================
   MAIN APPLICATION
   ================================= */

class PortfolioApp {
    constructor() {
        this.isInitialized = false;
        this.resizeObserver = null;
    }

    // Initialize the application
    async init() {
        try {
            console.log('🚀 Initializing Aleyna Alemdar Portfolio...');
            
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                await new Promise(resolve => {
                    document.addEventListener('DOMContentLoaded', resolve);
                });
            }

            // Initialize core components in order
            await this.initializeCore();
            await this.initializeUI();
            await this.initializeInteractions();
            await this.initializeOptimizations();

            this.isInitialized = true;
            console.log('✅ Portfolio initialization complete!');
            
            // Dispatch ready event
            this.dispatchReadyEvent();
            
        } catch (error) {
            console.error('❌ Portfolio initialization failed:', error);
            this.handleInitError(error);
        }
    }

    // Initialize core functionality
    async initializeCore() {
        console.log('📋 Initializing core components...');
        
        // Build and render components
        ComponentBuilder.init();
        
        // Initialize navigation
        NavigationController.init();
        
        // Set up responsive navigation for mobile
        NavigationController.initMobileNavigation();
    }

    // Initialize UI and animations
    async initializeUI() {
        console.log('🎨 Initializing UI and animations...');
        
        // Initialize animations
        AnimationController.init();
        
        // Add dynamic styles based on device
        this.addDynamicStyles();
        
        // Initialize theme handling
        this.initializeTheme();
    }

    // Initialize user interactions
    async initializeInteractions() {
        console.log('🖱️ Initializing interactions...');
        
        // Initialize scroll handling
        this.initializeScrollHandling();
        
        // Initialize resize handling
        this.initializeResizeHandling();
        
        // Initialize performance monitoring
        this.initializePerformanceMonitoring();
        
        // Initialize error handling
        this.initializeErrorHandling();
    }

    // Initialize performance optimizations
    async initializeOptimizations() {
        console.log('⚡ Initializing optimizations...');
        
        // Lazy load images
        this.initializeLazyLoading();
        
        // Preload critical resources
        this.preloadCriticalResources();
        
    }

    // Add dynamic styles based on device capabilities
    addDynamicStyles() {
        const style = document.createElement('style');
        
        let dynamicCSS = `
            /* Dynamic animations based on device capabilities */
            .glass-card, .project-card, .certificate-card, .timeline-item {
                opacity: 0;
                transition: var(--transition-smooth);
            }
            
            .glass-card.animated, .project-card.animated, 
            .certificate-card.animated, .timeline-item.animated {
                opacity: 1;
            }
        `;
        
        // Disable expensive effects on low-end devices
        if (UTILS.isMobile() || navigator.hardwareConcurrency < 4) {
            dynamicCSS += `
                .hero-avatar::before,
                .bg-animation::before {
                    animation: none !important;
                }
                
                .glass-card, .nav-item {
                    backdrop-filter: blur(10px) !important;
                }
            `;
        }
        
        // High refresh rate optimizations
        if (window.screen && window.screen.getDisplayMedia) {
            dynamicCSS += `
                @media (min-resolution: 120dpi) {
                    * {
                        will-change: transform;
                    }
                }
            `;
        }
        
        style.textContent = dynamicCSS;
        document.head.appendChild(style);
    }

    // Initialize theme handling
    initializeTheme() {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!localStorage.getItem('portfolio-theme')) {
                    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    // Initialize scroll handling
    initializeScrollHandling() {
        let scrollTimeout;
        
        const scrollHandler = UTILS.throttle(() => {
            // Clear timeout if user is still scrolling
            clearTimeout(scrollTimeout);
            
            // Add scrolling class
            document.body.classList.add('is-scrolling');
            
            // Remove scrolling class after scroll ends
            scrollTimeout = setTimeout(() => {
                document.body.classList.remove('is-scrolling');
            }, 150);
            
        }, 16); // ~60fps
        
        window.addEventListener('scroll', scrollHandler, { passive: true });
    }

    // Initialize resize handling
    initializeResizeHandling() {
        const resizeHandler = UTILS.debounce(() => {
            // Update particle system if exists
            if (AnimationController.particleSystem) {
                const canvas = AnimationController.particleSystem.canvas;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            
            // Trigger custom resize event
            document.dispatchEvent(new CustomEvent('portfolioResize', {
                detail: UTILS.getViewport()
            }));
            
        }, 250);
        
        window.addEventListener('resize', resizeHandler);
        
        // Use ResizeObserver for more granular control
        if (window.ResizeObserver) {
            this.resizeObserver = new ResizeObserver(entries => {
                for (const entry of entries) {
                    // Handle specific element resize events
                    if (entry.target.classList.contains('hero-avatar')) {
                        this.handleAvatarResize(entry);
                    }
                }
            });
            
            // Observe critical elements
            const avatarElement = document.querySelector('.hero-avatar');
            if (avatarElement) {
                this.resizeObserver.observe(avatarElement);
            }
        }
    }

    // Handle avatar resize
    handleAvatarResize(entry) {
        const { width, height } = entry.contentRect;
        const fontSize = Math.min(width, height) * 0.2;
        entry.target.style.fontSize = `${fontSize}px`;
    }

    // Initialize performance monitoring
    initializePerformanceMonitoring() {
        // Monitor frame rate
        let frameCount = 0;
        let lastTime = performance.now();
        
        const monitorFrameRate = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastTime >= 1000) {
                const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                
                // Adjust animations based on performance
                if (fps < 30) {
                    document.body.classList.add('low-performance');
                } else {
                    document.body.classList.remove('low-performance');
                }
                
                frameCount = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(monitorFrameRate);
        };
        
        requestAnimationFrame(monitorFrameRate);
        
        // Monitor memory usage (if available)
        if (performance.memory) {
            setInterval(() => {
                const memory = performance.memory;
                const usedMB = memory.usedJSHeapSize / 1048576;
                
                if (usedMB > 100) { // 100MB threshold
                    console.warn('High memory usage detected:', usedMB.toFixed(2), 'MB');
                }
            }, 30000); // Check every 30 seconds
        }
    }

    // Initialize error handling
    initializeErrorHandling() {
        window.addEventListener('error', (event) => {
            console.error('Global error:', event.error);
            this.handleError(event.error);
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
            this.handleError(event.reason);
        });
    }

    // Initialize lazy loading
    initializeLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Preload critical resources
    preloadCriticalResources() {
        const criticalResources = [
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
        ];
        
        criticalResources.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = url;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }

    // Handle initialization error
    handleInitError(error) {
        // Show user-friendly error message
        const errorHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--color-surface);
                color: var(--color-text);
                padding: 2rem;
                border-radius: 10px;
                text-align: center;
                z-index: 10000;
            ">
                <h3>Oops! Something went wrong</h3>
                <p>Please refresh the page or try again later.</p>
                <button onclick="location.reload()" style="
                    background: var(--primary-gradient);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    margin-top: 1rem;
                    cursor: pointer;
                ">Refresh Page</button>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', errorHTML);
    }

    // Handle runtime errors
    handleError(error) {
        // Log error for debugging
        console.error('Runtime error:', error);
        
        // Could send to error tracking service here
        // Example: Sentry.captureException(error);
    }

    // Dispatch ready event
    dispatchReadyEvent() {
        const event = new CustomEvent('portfolioReady', {
            detail: {
                timestamp: Date.now(),
                version: '1.0.0',
                features: {
                    animations: !UTILS.prefersReducedMotion(),
                    particles: !UTILS.isMobile(),
                    highPerformance: navigator.hardwareConcurrency >= 4
                }
            }
        });
        
        document.dispatchEvent(event);
    }

    // Public API methods
    getNavigationController() {
        return NavigationController;
    }

    getAnimationController() {
        return AnimationController;
    }

    // Cleanup resources
    cleanup() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        
        AnimationController.cleanup();
        NavigationController.cleanup();
        
        this.isInitialized = false;
    }
}

// Initialize the application
const app = new PortfolioApp();

// Auto-initialize when script loads
app.init();

// Make app available globally for debugging
window.PortfolioApp = app;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}