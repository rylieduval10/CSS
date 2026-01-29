/**
 * Position Badge Functionality
 * Baseball Monster - 2025
 * 
 * Usage:
 *   <script src="position-badges.js"></script>
 * 
 * HTML Structure Required:
 *   <div class="modern-filter-badges">
 *     <div class="modern-filter-badge active" id="all-badge">All</div>
 *     <div class="modern-filter-badge" id="clear-badge">Clear</div>
 *     
 *     <label class="modern-filter-badge" data-pos="C">
 *       <input type="checkbox" name="positions[]" value="C">
 *       C
 *     </label>
 *     <!-- More position badges... -->
 *   </div>
 */

(function() {
    'use strict';
    
    // Initialize position badge functionality
    function initPositionBadges() {
        const allBadge = document.getElementById('all-badge');
        const clearBadge = document.getElementById('clear-badge');
        
        if (!allBadge || !clearBadge) {
            console.warn('All or Clear badge not found');
            return;
        }
        
        // Handle position badge clicks
        document.querySelectorAll('.modern-filter-badge[data-pos]').forEach(badge => {
            badge.addEventListener('click', function(e) {
                // Prevent default label behavior
                e.preventDefault();
                
                const checkbox = this.querySelector('input[type="checkbox"]');
                
                if (!checkbox) {
                    console.warn('Checkbox not found in badge:', this);
                    return;
                }
                
                // Toggle checkbox state
                checkbox.checked = !checkbox.checked;
                
                // Toggle active class to match checkbox state
                if (checkbox.checked) {
                    this.classList.add('active');
                } else {
                    this.classList.remove('active');
                }
                
                // Remove 'All' active state when any position is selected
                allBadge.classList.remove('active');
                
                console.log('Position badge clicked:', {
                    position: this.getAttribute('data-pos'),
                    checked: checkbox.checked,
                    active: this.classList.contains('active')
                });
            });
        });
        
        // Handle "All" button
        allBadge.addEventListener('click', function() {
            // Remove active class from all badges
            document.querySelectorAll('.modern-filter-badge').forEach(badge => {
                badge.classList.remove('active');
                
                // Uncheck all checkboxes
                const checkbox = badge.querySelector('input[type="checkbox"]');
                if (checkbox) {
                    checkbox.checked = false;
                }
            });
            
            // Activate "All"
            this.classList.add('active');
            
            console.log('All positions selected');
        });
        
        // Handle "Clear" button
        clearBadge.addEventListener('click', function() {
            // Remove active class from all badges (including All)
            document.querySelectorAll('.modern-filter-badge').forEach(badge => {
                badge.classList.remove('active');
                
                // Uncheck all checkboxes
                const checkbox = badge.querySelector('input[type="checkbox"]');
                if (checkbox) {
                    checkbox.checked = false;
                }
            });
            
            console.log('All positions cleared');
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPositionBadges);
    } else {
        initPositionBadges();
    }
    
    // Expose function for manual initialization (if needed after dynamic content)
    window.initPositionBadges = initPositionBadges;
    
})();