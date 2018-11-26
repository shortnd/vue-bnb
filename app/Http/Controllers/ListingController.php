<?php

namespace App\Http\Controllers;

use App\Listing;

class ListingController extends Controller
{
    public function add_image_urls($listing, $id)
    {
        for ($i = 1; $i <= 4; $i++) {
            $listing['image_' . $i] = asset(
                'images/' . $id . '/Image_' . $i . '.jpg'
            );
        }
        return $listing;
    }

    public function get_listing_web(Listing $listing)
    {
        $listing = $this->add_image_urls($listing, $listing->id);
        return view('app')->withListing($listing);
    }

    public function get_listing_api(Listing $listing)
    {
        $listing = $this->add_image_urls($listing, $listing->id);
        return response($listing);
    }
}
