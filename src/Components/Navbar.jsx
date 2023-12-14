import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className='showdiv'>
                <div className='show-btn'>
                    <img src="./img/setting.png" id='setting' />
                    <span>Display</span>
                </div>
                <div className="shown">
                    <div>
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Grouping</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Ordering</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar