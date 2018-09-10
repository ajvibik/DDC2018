var app = angular.module('DDCApp', []);

app.controller('DDCCtrl', function ($scope) {

    $scope.arrowUp=true;

    // Product
    $scope.Networking = true;
    $scope.Security_Systems = false;
    $scope.storage_solutions = false;
    $scope.ID_Cards_Printer = false;
    $scope.Interactive_Boards = false;
    $scope.Scanners = false;
    $scope.Telecommunication = false;
    $scope.DeskAlert_Software = false;

    // Infrastructure 
    $scope.Data_Center = true;
    $scope.Structured_Cabling = false;
    $scope.CCTV_Surveillance = false;
    $scope.IP_Telephony_Solutions = false;
    $scope.Managed_WiFi = false;
    $scope.VPN_UTM_Solution = false;
    $scope.eBusiness_Solutions = false;
    $scope.Integrated_Solutions = false;

    //IT services
    $scope.Magento = true;
    $scope.SAP_Hybris = false;
    $scope.Demandware = false;
    $scope.Oracle_Commerce = false;
    $scope.Oracle_Fusion_Middleware = false;
    $scope.Mobility = false;
    $scope.Salesforce = false;
    $scope.IOT = false;
    $scope.Bigdata_Analytics = false;
    $scope.Corporate_Training = false;



    $scope.changeView = function (val) {
        if (val == 'Networking') {
            $scope.Networking = true;
            $scope.Security_Systems = false;
            $scope.storage_solutions = false;
            $scope.ID_Cards_Printer = false;
            $scope.Interactive_Boards = false;
            $scope.Scanners = false;
            $scope.Telecommunication = false;
            $scope.DeskAlert_Software = false;
        } else if (val == 'Security_Systems') {
            $scope.Networking = false;
            $scope.Security_Systems = true;
            $scope.storage_solutions = false;
            $scope.ID_Cards_Printer = false;
            $scope.Interactive_Boards = false;
            $scope.Scanners = false;
            $scope.Telecommunication = false;
            $scope.DeskAlert_Software = false;
        } else if (val == 'storage_solutions') {
            $scope.Networking = false;
            $scope.Security_Systems = false;
            $scope.storage_solutions = true;
            $scope.ID_Cards_Printer = false;
            $scope.Interactive_Boards = false;
            $scope.Scanners = false;
            $scope.Telecommunication = false;
            $scope.DeskAlert_Software = false;
        }
        else if (val == 'ID_Cards_Printer') {
            $scope.Networking = false;
            $scope.Security_Systems = false;
            $scope.storage_solutions = false;
            $scope.ID_Cards_Printer = true;
            $scope.Interactive_Boards = false;
            $scope.Scanners = false;
            $scope.Telecommunication = false;
            $scope.DeskAlert_Software = false;
        } else if (val == 'Interactive_Boards') {
            $scope.Networking = false;
            $scope.Security_Systems = false;
            $scope.storage_solutions = false;
            $scope.ID_Cards_Printer = false;
            $scope.Interactive_Boards = true;
            $scope.Scanners = false;
            $scope.Telecommunication = false;
            $scope.DeskAlert_Software = false;
        }
        else if (val == 'Scanners') {
            $scope.Networking = false;
            $scope.Security_Systems = false;
            $scope.storage_solutions = false;
            $scope.ID_Cards_Printer = false;
            $scope.Interactive_Boards = false;
            $scope.Scanners = true;
            $scope.Telecommunication = false;
            $scope.DeskAlert_Software = false;
        } else if (val == 'Telecommunication') {
            $scope.Networking = false;
            $scope.Security_Systems = false;
            $scope.storage_solutions = false;
            $scope.ID_Cards_Printer = false;
            $scope.Interactive_Boards = false;
            $scope.Scanners = false;
            $scope.Telecommunication = true;
            $scope.DeskAlert_Software = false;
        }

        else if (val == 'DeskAlert_Software') {
            $scope.Networking = false;
            $scope.Security_Systems = false;
            $scope.storage_solutions = false;
            $scope.ID_Cards_Printer = false;
            $scope.Interactive_Boards = false;
            $scope.Scanners = false;
            $scope.Telecommunication = false;
            $scope.DeskAlert_Software = true;
        }
    }


    $scope.changeViewInfra = function (val) {
        if (val == 'Data_Center') {
            $scope.Data_Center = true;
            $scope.Structured_Cabling = false;
            $scope.CCTV_Surveillance = false;
            $scope.IP_Telephony_Solutions = false;
            $scope.Managed_WiFi = false;
            $scope.VPN_UTM_Solution = false;
            $scope.eBusiness_Solutions = false;
            $scope.Integrated_Solutions = false;
        } else if (val == 'Structured_Cabling') {
            $scope.Data_Center = false;
            $scope.Structured_Cabling = true;
            $scope.CCTV_Surveillance = false;
            $scope.IP_Telephony_Solutions = false;
            $scope.Managed_WiFi = false;
            $scope.VPN_UTM_Solution = false;
            $scope.eBusiness_Solutions = false;
            $scope.Integrated_Solutions = false;
        } else if (val == 'CCTV_Surveillance') {
            $scope.Data_Center = false;
            $scope.Structured_Cabling = false;
            $scope.CCTV_Surveillance = true;
            $scope.IP_Telephony_Solutions = false;
            $scope.Managed_WiFi = false;
            $scope.VPN_UTM_Solution = false;
            $scope.eBusiness_Solutions = false;
            $scope.Integrated_Solutions = false;
        }
        else if (val == 'IP_Telephony_Solutions') {
            $scope.Data_Center = false;
            $scope.Structured_Cabling = false;
            $scope.CCTV_Surveillance = false;
            $scope.IP_Telephony_Solutions = true;
            $scope.Managed_WiFi = false;
            $scope.VPN_UTM_Solution = false;
            $scope.eBusiness_Solutions = false;
            $scope.Integrated_Solutions = false;
        } else if (val == 'Managed_WiFi') {
            $scope.Data_Center = false;
            $scope.Structured_Cabling = false;
            $scope.CCTV_Surveillance = false;
            $scope.IP_Telephony_Solutions = false;
            $scope.Managed_WiFi = true;
            $scope.VPN_UTM_Solution = false;
            $scope.eBusiness_Solutions = false;
            $scope.Integrated_Solutions = false;
        }
        else if (val == 'VPN_UTM_Solution') {
            $scope.Data_Center = false;
            $scope.Structured_Cabling = false;
            $scope.CCTV_Surveillance = false;
            $scope.IP_Telephony_Solutions = false;
            $scope.Managed_WiFi = false;
            $scope.VPN_UTM_Solution = true;
            $scope.eBusiness_Solutions = false;
            $scope.Integrated_Solutions = false;
        } else if (val == 'eBusiness_Solutions') {
            $scope.Data_Center = false;
            $scope.Structured_Cabling = false;
            $scope.CCTV_Surveillance = false;
            $scope.IP_Telephony_Solutions = false;
            $scope.Managed_WiFi = false;
            $scope.VPN_UTM_Solution = false;
            $scope.eBusiness_Solutions = true;
            $scope.Integrated_Solutions = false;
        }

        else if (val == 'Integrated_Solutions') {
            $scope.Data_Center = false;
            $scope.Structured_Cabling = false;
            $scope.CCTV_Surveillance = false;
            $scope.IP_Telephony_Solutions = false;
            $scope.Managed_WiFi = false;
            $scope.VPN_UTM_Solution = false;
            $scope.eBusiness_Solutions = false;
            $scope.Integrated_Solutions = true;
        }
    }

    $scope.changeViewService = function (val) {
        if (val == 'Magento') {
            $scope.Magento = true;
            $scope.SAP_Hybris = false;
            $scope.Demandware = false;
            $scope.Oracle_Commerce = false;
            $scope.Oracle_Fusion_Middleware = false;
            $scope.Mobility = false;
            $scope.Salesforce = false;
            $scope.IOT = false;
            $scope.Bigdata_Analytics = false;
            $scope.Corporate_Training = false;
        } else if (val == 'SAP_Hybris') {
            $scope.Magento = false;
            $scope.SAP_Hybris = true;
            $scope.Demandware = false;
            $scope.Oracle_Commerce = false;
            $scope.Oracle_Fusion_Middleware = false;
            $scope.Mobility = false;
            $scope.Salesforce = false;
            $scope.IOT = false;
            $scope.Bigdata_Analytics = false;
            $scope.Corporate_Training = false;
        } else if (val == 'Demandware') {
            $scope.Magento = false;
            $scope.SAP_Hybris = false;
            $scope.Demandware = true;
            $scope.Oracle_Commerce = false;
            $scope.Oracle_Fusion_Middleware = false;
            $scope.Mobility = false;
            $scope.Salesforce = false;
            $scope.IOT = false;
            $scope.Bigdata_Analytics = false;
            $scope.Corporate_Training = false;
        }
        else if (val == 'Oracle_Commerce') {
            $scope.Magento = false;
            $scope.SAP_Hybris = false;
            $scope.Demandware = false;
            $scope.Oracle_Commerce = true;
            $scope.Oracle_Fusion_Middleware = false;
            $scope.Mobility = false;
            $scope.Salesforce = false;
            $scope.IOT = false;
            $scope.Bigdata_Analytics = false;
            $scope.Corporate_Training = false;
        } else if (val == 'Oracle_Fusion_Middleware') {
            $scope.Magento = false;
            $scope.SAP_Hybris = false;
            $scope.Demandware = false;
            $scope.Oracle_Commerce = false;
            $scope.Oracle_Fusion_Middleware = true;
            $scope.Mobility = false;
            $scope.Salesforce = false;
            $scope.IOT = false;
            $scope.Bigdata_Analytics = false;
            $scope.Corporate_Training = false;
        }
        else if (val == 'Mobility') {
            $scope.Magento = false;
            $scope.SAP_Hybris = false;
            $scope.Demandware = false;
            $scope.Oracle_Commerce = false;
            $scope.Oracle_Fusion_Middleware = false;
            $scope.Mobility = true;
            $scope.Salesforce = false;
            $scope.IOT = false;
            $scope.Bigdata_Analytics = false;
            $scope.Corporate_Training = false;
        } else if (val == 'Salesforce') {
            $scope.Magento = false;
            $scope.SAP_Hybris = false;
            $scope.Demandware = false;
            $scope.Oracle_Commerce = false;
            $scope.Oracle_Fusion_Middleware = false;
            $scope.Mobility = false;
            $scope.Salesforce = true;
            $scope.IOT = false;
            $scope.Bigdata_Analytics = false;
            $scope.Corporate_Training = false;
        }

        else if (val == 'IOT') {
            $scope.Magento = false;
            $scope.SAP_Hybris = false;
            $scope.Demandware = false;
            $scope.Oracle_Commerce = false;
            $scope.Oracle_Fusion_Middleware = false;
            $scope.Mobility = false;
            $scope.Salesforce = false;
            $scope.IOT = true;
            $scope.Bigdata_Analytics = false;
            $scope.Corporate_Training = false;
        }

        else if (val == 'Bigdata_Analytics') {
            $scope.Magento = false;
            $scope.SAP_Hybris = false;
            $scope.Demandware = false;
            $scope.Oracle_Commerce = false;
            $scope.Oracle_Fusion_Middleware = false;
            $scope.Mobility = false;
            $scope.Salesforce = false;
            $scope.IOT = false;
            $scope.Bigdata_Analytics = true;
            $scope.Corporate_Training = false;
        }

        else if (val == 'Corporate_Training') {
            $scope.Magento = false;
            $scope.SAP_Hybris = false;
            $scope.Demandware = false;
            $scope.Oracle_Commerce = false;
            $scope.Oracle_Fusion_Middleware = false;
            $scope.Mobility = false;
            $scope.Salesforce = false;
            $scope.IOT = false;
            $scope.Bigdata_Analytics = false;
            $scope.Corporate_Training = true;
        }
    }
});
