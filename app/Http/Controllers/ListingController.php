<?php

namespace App\Http\Controllers;

use App\Listing;

class ListingController extends Controller
{
    public function get_listing($listing)
    {
        $model = $listing->toArray();
        for ($i=1; $i < 4; $i++) { 
            $model['image_' . $i] = asset(
                'images/'. $listing->id . '/Image_' . $i . '.jpg'
            );
        }
        return collect(['listing' => $model]);
    }
    public function get_home_web()
    {
        $collection = Listing::all([
            'id', 'address', 'title', 'price_per_night'
        ]);
        $data = collect(['listings' => $collection]);
        return view('app')->withData($data);
    }

    public function get_listing_web(Listing $listing)
    {
        $data = $this->get_listing($listing);
        return response($data);
    }

    public function get_listing_api(Listing $listing)
    {
        $data = $this->get_listing($listing);
        return response($data);
    }
}
